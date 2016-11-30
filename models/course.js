
var db = require('../config/db');

var crop = require('../utils/crop');

exports.create = function (body, cb) {
	var query = 'INSERT INTO `course` SET ?';

	db.query(query, body, function (err, rows) {

		if(err) throw err;

		cb(err, rows.insertId);
	});
}

exports.find = function (cs_id, cb) {
	var query = 'SELECT * FROM `course` WHERE `cs_id` = ?'

	db.query(query, [cs_id], cb);
}

exports.update = function (body, cb) {

	var query = 'UPDATE `course` SET ? WHERE `cs_id` = ' + body.cs_id;

	delete body.cs_id;
	db.query(query, body, cb);
}

// 裁切另存图片
exports.resize = function (body, cb) {

	crop.resize(body.x, body.y, body.w, body.h, body.cs_cover_original, function (err, path) {
		if(err) return;

		var query = 'UPDATE `course` SET `cs_cover` = ? WHERE `cs_id` = ?';

		db.query(query, [path, body.cs_id], function (err, rows) {
			if(err) return;

			cb(err, rows);
		});
	});
}

// 课程列表
exports.list = function (tc_id, tc_type, cb) {
	var query;
	// 管理员
	if(tc_type == 0) {
		query = 'SELECT * FROM `course`, `teacher`, `category` WHERE cs_tc_id = tc_id AND cs_cg_id = cg_id';
	} else {
		query = 'SELECT * FROM `course`, `teacher`, `category` WHERE cs_tc_id = tc_id AND cs_cg_id = cg_id AND cs_tc_id = ' + tc_id;
	}

	db.query(query, cb);

}



