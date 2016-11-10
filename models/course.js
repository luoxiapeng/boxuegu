
var db = require('../config/db');

exports.create = function (body, cb) {
	var query = 'INSERT INTO `course` SET ?';

	db.query(query, body, function (err, rows) {

		if(err) throw err;

		cb(err, rows.insertId);
	});
}

exports.find = function (cs_id, cb) {
	var query = 'SELECT `cs_id`, `cs_name`, `cs_cover` FROM `course` WHERE `cs_id` = ?'

	db.query(query, [cs_id], cb);
}

exports.update = function (body, cb) {

	var query = 'UPDATE `course` SET ? WHERE `cs_id` = ' + body.cs_id;

	delete body.cs_id;
	db.query(query, body, cb);
}



