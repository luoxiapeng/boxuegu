
var router = require('express').Router();

var course = require('../models/course');

// 路径前缀
router.prefix = '/course';

// 创建课程
router.get('/create', function (req, res) {
	res.render('course/create', {});
});

// 课程基本信息
router.get('/create/basic', function (req, res) {
	res.render('course/basic', {});
});

// 课程图片
router.get('/create/picture', function (req, res) {
	res.render('course/picture', {});
});

// 课程课时
router.get('/create/lesson', function (req, res) {
	res.render('course/lesson', {});
});

// 所有课程
router.get('/list', function (req, res) {
	res.render('course/list', {});
});

// 课程分类
router.get('/category', function (req, res) {
	res.render('course/category', {});
});

// 添加课程
router.get('/category/add', function (req, res, next) {

	// 查询课程分类

	course.getTop(function (err, rows) {
		if(err) next(err);

		res.render('course/category_add', {rows: rows});

	});
});

router.post('/category/add', function (req, res, next) {
	// 未校验
	var body = req.body;

	course.add(body, function (err, result) {
		if(err) next(err);

		res.json({
			code: 10000,
			msg: '添加成功！'
		});
	});

});

module.exports = router;




