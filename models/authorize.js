
var db = require('../config/db');

var md5 = require('md5');

exports.find = function (body, cb) {
	// 登录名称
	var tc_name = body['tc_name'];
	// md5处理
	var tc_pass = md5(body['tc_pass']);

	db.query(
		'SELECT `tc_id`, `tc_name`, `tc_type`, `tc_avatar`, `tc_roster` FROM `teacher` WHERE `tc_name` = ? AND `tc_pass` = ?',
		[tc_name, tc_pass],
		function (err, rows) {
			if(err) return;
			
			cb(null, rows);
		}
	);
}