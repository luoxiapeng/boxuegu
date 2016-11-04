
var router = require('express').Router();

// 数据模型
var teacher = require('../models/teacher');

// 路径前缀
router.prefix = '/teacher';

// 列表页面
router.get('/', function (req, res) {
	res.render('teacher/index', {});
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

		// 
		if(err) {
			return res.json({
				code: 10001,
				msg: '数据操作错误！'
			});
		}

		res.json({
			code: 10000,
			msg: '添加成功！'
		});
	});

});

module.exports = router;




