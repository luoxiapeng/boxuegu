
var router = require('express').Router();

router.prefix = '/login';

router.get('/', function (req, res) {
	res.render('login/index', {});
});

module.exports = router;