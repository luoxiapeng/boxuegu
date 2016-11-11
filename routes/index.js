
var router = require('express').Router();

var login = require('../models/authorize');

// 路径前缀
router.prefix = '/';

// 首页
router.get('/', function (req, res) {
	res.render('dashboard/index', {});
});

// 个人中心
router.get('/profile', function (req, res) {
	res.render('dashboard/profile', {});
});

// 登录页面
router.get('/login', function (req, res) {
	res.render('login/index', {});
});

// 登录验证
router.post('/login', function (req, res, next) {
	// 数据未验证
	var body = req.body;

	login.find(body, function (err, result) {
		if(err) next(err);

		if(result) {
			// 记录登录信息
			req.session.loginfo = result;

			res.json({
				code: 10000,
				msg: '登录成功'
			});

			return false;
		}

		res.json({
			code: 10001,
			msg: '登录失败'
		});

	});
});

// 退出登录
router.get('/logout', function (req, res) {
	req.session.loginfo = null;

	res.redirect('/login');
});

module.exports = router;




