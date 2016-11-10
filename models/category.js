
var db = require('../config/db');

var fs = require('fs');

// 获取顶级分类
exports.getTop = function (cb) {

	var query = 'SELECT cg_id, cg_name FROM category WHERE cg_pid=0';

	db.query(query, cb);

}

// 添加分类
exports.update = function (body, cb) {

	var query = '';
	if(Number(body.cg_id)) {
		query = 'UPDATE `category` SET ? WHERE `cg_id` = ' + body.cg_id;
	} else {

		delete body.cg_id;
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
exports.find = function (cg_id, cb) {

	var query = 'SELECT * FROM `category` WHERE `cg_id` = ?'; 

	db.query(query, [cg_id], cb);
}




