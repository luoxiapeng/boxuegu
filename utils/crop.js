
var gm = require('gm');

var path = require('path');

var rootPath = path.resolve(__dirname,'../');

exports.resize = function (x, y, w, h, originpath, cb) {
	var fileExt = originpath.slice(originpath.lastIndexOf('.'));
	var originpath = rootPath + '/uploads/original/' + originpath;
	var destPath = rootPath + '/uploads/thumbs/' + Date.now() + fileExt;

	// 要检测一下目录
	gm(originpath)
	.crop(w, h, x, y)
	.write(destPath, function (err, result) {
		if(err) cb(err);

		cb(err, path.basename(destPath));

	});
}