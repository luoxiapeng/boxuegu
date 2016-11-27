
var router = require('express').Router();

// 路径前缀
router.prefix = '/advert';

router.get('/', function (req, res) {
	res.render('advert/index', {});
});

router.get('/add', function (req, res) {
	res.render('advert/add', {});
});

module.exports = router;