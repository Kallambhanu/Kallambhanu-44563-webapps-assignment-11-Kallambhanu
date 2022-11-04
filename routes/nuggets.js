var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nuggets', { title: 'search results nuggets' });
});

module.exports = router;
