
var router = require('express').Router();

// 数据模型
var teacher = require('../models/teacher');

var moment = require('moment');

// 路径前缀
router.prefix = '/teacher';

// 列表页面
router.get('/', function (req, res) {
	// 所有讲师信息
	teacher.show(function (err, result) {

		var data = [];
		// 处理时间格式
		result.forEach(function (val, key) {
			val.tc_brithday = moment(val.tc_brithday).format('YYYY-MM-DD');
			val.tc_join_time = moment(val.tc_join_time).format('YYYY-MM-DD');

			data.push(val);
		});

		res.render('teacher/index', {teachers: data});
	});
});

// 添加页面
router.get('/add', function (req, res) {
	res.render('teacher/add', {});
});

// 添加讲师
router.post('/add', function (req, res) {
	// 未验证
	var body = req.body;

	// 
	teacher.add(body, function (err) {
		if(err) return;

		res.json({
			code: 10000,
			msg: '添加成功！',
			result: {}
		});
	});

});

module.exports = router;




