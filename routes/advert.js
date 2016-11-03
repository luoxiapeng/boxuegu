
var router = require('express').Router();

router.get('/', function (req, res) {
	res.render('advert/index', {});
});

router.get('/add', function (req, res) {
	res.render('advert/add', {});
});

module.exports = router;