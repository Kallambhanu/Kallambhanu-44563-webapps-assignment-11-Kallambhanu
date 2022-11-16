var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nuggets', { title: 'Search Results nuggets' });
});
var express = require('express');
const nuggets_controllers= require('../controllers/nuggets');
var router = express.Router();
/* GET nuggetss */
router.get('/', nuggets_controllers.nuggets_view_all_Page );
module.exports = router;
/* GET detail nuggets page */ 
router.get('/detail', nuggets_controllers.nuggets_view_one_Page); 
/* GET create nuggets page */ 
router.get('/create', nuggets_controllers.nuggets_create_Page);
 