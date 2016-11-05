
var db = require('../config/db');

// 获取顶级分类
exports.getTop = function (cb) {

	var query = 'SELECT cat_id, cat_name FROM category WHERE cat_pid=0';

	db.query(query, cb);

}

// 添加分类
exports.add = function (body, cb) {

	var query = 'INSERT INTO category SET ?';

	db.query(query, body, cb);

}

// 展示所有分类
exports.show = function (cb) {
	// 需联表查询
	var query = 'SELECT * FROM `category`';

	db.query(query, cb);
}




