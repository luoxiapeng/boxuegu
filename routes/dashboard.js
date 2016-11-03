
var router = require('express').Router();

router.get('/', function (req, res) {
	res.render('dashboard/index', {});
});

module.exports = router;