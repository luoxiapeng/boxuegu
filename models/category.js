
var db = require('../config/db');

var fs = require('fs');

// 获取顶级分类
exports.getTop = function (cb) {

	var query = 'SELECT cat_id, cat_name FROM category WHERE cat_pid=0';

	db.query(query, cb);

}

// 添加分类
exports.update = function (body, cb) {

	var query = '';
	if(Number(body.cat_id)) {
		query = 'UPDATE `category` SET ? WHERE `cat_id` = ' + body.cat_id;
	} else {

		delete body.cat_id;
		query = 'INSERT INTO category SET ?';
	}

	db.query(query, body, cb);

}

// 展示所有分类
exports.show = function (cb) {
	// 需联表查询
	var query = 'SELECT * FROM `category`';

	db.query(query, cb);
}

// 查询分类信息
exports.find = function (cat_id, cb) {

	var query = 'SELECT * FROM `category` WHERE `cat_id` = ?'; 

	db.query(query, [cat_id], cb);
}




