
var express = require('express');

var app = express();

// 设置模板引擎
app.set('views','./views');
app.set('view engine', 'xtpl');

// 设置静态资源目录
app.use('/static', express.static('public'));
app.use('/static', express.static('uploads'));
app.use('/static', express.static('bower_components'));

var dashboard = require('./routes/dashboard');
var users = require('./routes/users');
var course = require('./routes/course');
var advert = require('./routes/advert');

app.use('/', dashboard);
app.use('/users', users);
app.use('/course', course);
app.use('/advert', advert);

app.listen(3000);