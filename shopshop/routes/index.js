var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'WOW IK BEN EEN HACKERMAN' });
});

module.exports = router;
