
var db = require('../config/db');

exports.getTop = function (cb) {

	var query = 'SELECT cat_id, cat_name FROM category WHERE cat_pid=0';

	db.query(query, cb);

}

exports.add = function (body, cb) {

	db.query('INSERT INTO category SET ?', body, cb);

}