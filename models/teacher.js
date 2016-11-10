
var db = require('../config/db');

var md5 = require('md5');

// 添加讲师
exports.add = function (body, cb) {
	// md5处理
	body['tc_pass'] = md5(body['tc_pass']);

	db.query('INSERT INTO teacher SET ?', body, function (err, result) {
		if(err) return cb(err);

		cb(err, result);

	});
}

exports.show = function (cb) {
	var query = 'SELECT * FROM `teacher`';

	db.query(query, cb);
}







