
var fs = require('fs');

var path = require('path');

var rootPath = path.resolve(__dirname,'../');

exports.show = function (cb) {
	fs.readFile(rootPath + '/config/region.json', 'utf-8', function (err, data) {
		if(err) return;

		cb(data);
	});
}