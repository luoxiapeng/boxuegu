
var db = require('../config/db');

var md5 = require('md5');

// 添加讲师
exports.add = function (body, cb) {
	// md5处理
	body['tr_pass'] = md5(body['tr_pass']);

	db.query('INSERT INTO teacher SET ?', body, function (err, result) {
		if(err) return cb(err);

		cb(err, result);

	});
}