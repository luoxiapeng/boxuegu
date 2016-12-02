
var db = require('../config/db');

exports.add = function (body, cb) {
	var query;

	var ls_id = body.ls_id;

	if(ls_id) {
		query = 'UPDATE `lesson` SET ? WHERE `ls_id` = ?';
	} else {
		query = 'INSERT INTO `lesson` SET ?';
	}
	
	delete body.ls_id;

	db.query(query, [body, ls_id], cb);

}

exports.list = function (ls_cs_id, cb) {
	var query = 'SELECT * FROM `lesson` WHERE `ls_cs_id` = ?';

	db.query(query, [ls_cs_id], cb);
}

exports.find = function (ls_id, cb) {
	var query = 'SELECT * FROM `lesson` WHERE `ls_id` = ?';

	db.query(query, [ls_id], cb);
}