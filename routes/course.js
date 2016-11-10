
var router = require('express').Router();

var upload = require('../utils/upload');

var category = require('../models/category');

var course = require('../models/course');

var common = require('../utils/common');

var teacher = require('../models/teacher');

// 路径前缀
router.prefix = '/course';

// 创建课程
router.get('/create', function (req, res) {
	res.render('course/create', {});
});

router.post('/create', function (req, res) {
	console.log(req.body);

	var body = req.body;

	course.create(body, function (err, insertId) {
		if(err) throw err;

		res.json({
			code: 10000,
			msg: '创建成功',
			result: {id: insertId}
		});

	});

});

// 课程基本信息
router.get('/create/basic/:cs_id', function (req, res) {

	var cs_id = req.params.cs_id;

	course.find(cs_id, function (err, result) {

		var data = {};

		data.cs_id = cs_id;

		data.course = result[0];

		teacher.show(function (err, result) {

			data.teacher = result;

			res.render('course/basic', data);
		});
	});

});

router.post('/create/basic', function (req, res) {
	var cs_id = req.body.cs_id;
	course.update(req.body, function (err, result) {
		// res.json(result);
		if(err) return err;

		res.json({
			code: 10000,
			msg: '添加成功！',
			result: {cs_id: cs_id}
		});
	});

});

// 课程图片
router.get('/create/picture/:cs_id', function (req, res) {

	var cs_id = req.params.cs_id;

	course.find(cs_id, function (err, result) {
		res.render('course/picture', result[0]);
	});
});

// 课程课时
router.get('/create/lesson', function (req, res) {
	res.render('course/lesson', {});
});

// 所有课程
router.get('/list', function (req, res) {
	res.render('course/list', {});
});

// 所有课程分类
router.get('/category', function (req, res) {
	// 
	category.show(function (err, result) {
		if(err) return;

		var categorys = common.getTree(result, 0);

		res.render('course/category_list', {categorys: categorys});
	});
});

// 添加分类页面
router.get('/category/add', function (req, res, next) {

	// 查询课程分类
	category.getTop(function (err, result) {
		if(err) next(err);

		res.render('course/category', {topCategory: result});

	});
});

// 添加分类
router.post('/category/update', function (req, res, next) {
	// 未校验
	var body = req.body;

	category.update(body, function (err, result) {
		if(err) next(err);

		res.json({
			code: 10000,
			msg: '添加成功！'
		});
	});

});

// 编辑分类
router.get('/category/edit/:cg_id', function (req, res) {

	var cat_id = req.params.cat_id;

	// 获取顶级分类
	category.getTop(function (err, result) {
		if(err) next(err);

		var topCategory = result;

		// 获取分类信息
		category.find(cat_id, function (err, result) {

			res.render('course/category', {category: result[0], topCategory: topCategory});
		});

	});

});

//  图片上传
router.post('/create/upload', upload.single('cs_cover'), function (req, res) {
	// console.log(req.body);
	var body = {
		cs_cover: req.file.filename,
		cs_id: req.body.cs_id
	}

	course.update(body, function (err, result) {
		if(err) return err;

		res.json(req.file);
	});

});

module.exports = router;




