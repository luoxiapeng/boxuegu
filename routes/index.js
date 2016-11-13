
var router = require('express').Router();

var login = require('../models/authorize');

var teacher = require('../models/teacher');

var region = require('../models/region');

var uploader = require('../utils/upload').upload('./uploads/avatars');

var moment = require('moment');

// 路径前缀
router.prefix = '/';

// 首页
router.get('/', function (req, res) {
	res.render('dashboard/index', {});
});

// 个人中心
router.get('/profile', function (req, res) {

	// 获取讲师id
	var tc_id = req.session.loginfo.tc_id;

	teacher.find(tc_id, function (err, result) {
		var data = result[0];

		data.tc_brithday = moment(Number(data.tc_brithday)).format('YYYY-MM-DD');
		data.tc_join_time = moment(Number(data.tc_join_time)).format('YYYY-MM-DD');

		res.render('dashboard/profile', {teacher: data});
	});
});

// 获取省市县
router.get('/region', function (req, res) {
	region.show(function (data) {
		res.json(data);
	});
});

// 更新资料
router.post('/profile/update', function (req, res) {
	var body = req.body;

	// 转成时间戳
	body.tc_brithday = moment(body.tc_brithday || 0).format('x');

	teacher.update(body, function (err, result) {
		if(err) return;

		res.json({
			code: 10000,
			msg: '成功啦!',
			result: {}
		});
	});
});

// 上传头像
router.post('/profile/avatar', uploader.single('tc_avatar_original'), function (req, res) {

	var body = {
		tc_avatar: req.file.filename,
		tc_id: req.body.tc_id
	}

	// 更新
	teacher.update(body, function (err, result) {
		if(err) return;

		res.json({
			code: 10000,
			msg: '成功啦!',
			result: body
		});
	});
});

// 修改密码
router.get('/repass', function (req, res) {
	res.render('dashboard/repass');
});

router.post('/repass', function (req, res) {
	var body = req.body;
	
	teacher.repass(body, function (err, result) {
		if(err) return;
		// 清空登陆信息
		req.session.loginfo = null;
		res.json({
			code: 10000,
			msg: '修改成功，请重新登陆！',
			result: {}
		});
	});

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
			req.session.loginfo = result[0];
			// 记录在cookie中
			res.cookie('loginfo', req.session.loginfo, {maxAge: 60 * 60 * 24 * 1000});

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




