
var router = require('express').Router();

// 路径前缀
router.prefix = '/users';

router.get('/', function (req, res) {
	res.render('users/index', {});
});

router.get('/profile', function (req, res) {
	res.render('users/profile', {});
});

module.exports = router;