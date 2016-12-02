
// 连接数据库
var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'studyit'
});

module.exports = db;