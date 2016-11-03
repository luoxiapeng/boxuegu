
var router = require('express').Router();

router.get('/create', function (req, res) {
	res.render('course/create', {});
});

router.get('/basic', function (req, res) {
	res.render('course/basic', {});
});

router.get('/picture', function (req, res) {
	res.render('course/picture', {});
});

router.get('/lesson', function (req, res) {
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




