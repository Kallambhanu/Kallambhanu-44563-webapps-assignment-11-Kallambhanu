var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nuggets', { title: 'Search Results nuggets' });
});
var express = require('express');
const nuggets_controlers= require('../controllers/nuggets');
var router = express.Router();
/* GET costumes */
router.get('/', nuggets_controlers.nuggets_view_all_Page );
module.exports = router;