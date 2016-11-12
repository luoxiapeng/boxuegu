
var multer = require('multer');

exports.upload = function (path) {
	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, path);
		},

		filename: function (req, file, cb) {
			var originalname = file.originalname,
				fileExt = originalname.slice(originalname.lastIndexOf('.')),
				fileName = originalname.slice(0, originalname.lastIndexOf('.'));

			cb(null, fileName + '-' + Date.now() + fileExt);
		}
	});


	return multer({storage: storage});
};