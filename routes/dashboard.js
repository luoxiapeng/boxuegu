
var router = require('express').Router();

// 路径前缀
router.prefix = '/';

router.get('/', function (req, res) {
	res.render('dashboard/index', {});
});

module.exports = router;