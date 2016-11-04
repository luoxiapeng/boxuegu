
var express = require('express');

var glob = require('glob');

var app = express();

// 设置模板引擎
app.set('views','./views');
app.set('view engine', 'xtpl');

// 设置静态资源目录
app.use('/static', express.static('public'));
app.use('/static', express.static('uploads'));
app.use('/static', express.static('bower_components'));

// 自动载入控制器
var routes = glob.sync('./routes/*.js', {cwd: __dirname});

routes.forEach(function (item) {
	var route = require(item);

	typeof route === 'function' && app.use(route.prefix, route);
});

app.listen(3000);


