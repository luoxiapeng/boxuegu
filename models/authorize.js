
var db = require('../config/db');

var md5 = require('md5');

exports.find = function (body, cb) {
	// 登录名称
	var tr_name = body['tr_name'];
	// md5处理
	var tr_pass = md5(body['tr_pass']);

	db.query(
		'SELECT `tr_id`, `tr_name`, `tr_avatar`, `tr_nickname` FROM `teacher` WHERE `tr_name` = ? AND `tr_pass` = ?',
		[tr_name, tr_pass],
		function (err, rows) {
			if(err) return cb(err);
			
			cb(null, rows[0]);
		}
	);
}