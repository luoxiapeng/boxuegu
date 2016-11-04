
var router = require('express').Router();

// 路径前缀
router.prefix = '/course';

router.get('/create', function (req, res) {
	res.render('course/create', {});
});

router.get('/create/basic', function (req, res) {
	res.render('course/basic', {});
});

router.get('/create/picture', function (req, res) {
	res.render('course/picture', {});
});

router.get('/create/lesson', function (req, res) {
	res.render('course/lesson', {});
});

router.get('/list', function (req, res) {
	res.render('course/list', {});
});

router.get('/category', function (req, res) {
	res.render('course/category', {});
});

router.get('/category/add', function (req, res) {
	res.render('course/category_add', {});
});

module.exports = router;




