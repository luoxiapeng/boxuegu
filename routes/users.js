
var router = require('express').Router();

router.get('/', function (req, res) {
	res.render('users/index', {});
});

router.get('/profile', function (req, res) {
	res.render('users/profile', {});
});

module.exports = router;