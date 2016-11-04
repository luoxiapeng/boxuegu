
var router = require('express').Router();

// 路径前缀
router.prefix = '/teacher';

router.get('/', function (req, res) {
	res.render('teacher/index', {});
});

router.get('/add', function (req, res) {
	res.render('teacher/add', {});
});

module.exports = router;