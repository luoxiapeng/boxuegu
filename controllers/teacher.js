
var router = require('express').Router();

// 数据模型
var teacher = require('../models/teacher');

var moment = require('moment');

var url = require('url');

// 路径前缀
router.prefix = '/teacher';

// 列表页面
router.get('/', function (req, res) {
	// 所有讲师信息
	teacher.show(function (err, result) {

		var data = [];
		// 处理时间格式
		result.forEach(function (val, key) {
			val.tc_brithday = moment(Number(val.tc_brithday)).format('YYYY-MM-DD');
			val.tc_join_time = moment(Number(val.tc_join_time)).format('YYYY-MM-DD');

			data.push(val);
		});

		res.render('teacher/index', {teachers: data});
	});
});

// 添加/修改讲师
router.get('/add|edit/:tc_id', function (req, res) {
	var tc_id = req.params.tc_id;

	// 添加
	if(!tc_id) return res.render('teacher/add', {});

	// 修改
	teacher.find(tc_id, function (err, result) {
		if(err) return;

		var tc_join_time = result[0].tc_join_time;

		// 格式化时间
		result[0].tc_join_time = moment(Number(tc_join_time)).format('YYYY-MM-DD');

		res.render('teacher/add', result[0]);

	});
});

// 添加讲师
router.post('/add', function (req, res) {
	// 未验证
	var body = req.body;

	// 处理成时间戳
	body.tc_join_time = moment(body.tc_join_time || 0).format('x');

	// 添加
	if(!body.tc_id) {
		// 
		teacher.add(body, function (err) {
			if(err) console.log(err);

			res.json({
				code: 10000,
				msg: '添加成功！',
				result: {}
			});
		});

		return;
	}

	// 修改
	teacher.update(body, function (err, result) {
		if(err) return;

		res.json({
			code: 10000,
			msg: '修改成功!',
			result: {}
		});
	});
});

router.post('/view', function (req, res) {
	var tc_id = req.body.tc_id;

	teacher.find(tc_id, function (err, result) {
		if(err) return;

		var data = result[0];
		// 格式化日期
		data.tc_brithday = moment(Number(data.tc_brithday)).format('YYYY-MM-DD');
		data.tc_join_time = moment(Number(data.tc_join_time)).format('YYYY-MM-DD');

		res.json({
			code: 10000,
			msg: '成功啦!',
			result: data
		});
	});
});

module.exports = router;




