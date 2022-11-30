var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nuggets', { title: 'Search Results nuggets' });
});
var express = require('express');
const nuggets_controllers= require('../controllers/nuggets');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET nuggetss */
router.get('/', nuggets_controllers.nuggets_view_all_Page );
module.exports = router;
/* GET detail nuggets page */ 
router.get('/detail',secured, nuggets_controllers.nuggets_view_one_Page); 
/* GET create nuggets page */ 
router.get('/create',secured, nuggets_controllers.nuggets_create_Page);
/* GET create update page */
router.get('/update',secured, nuggets_controllers.nuggets_update_Page);
/* GET delete nuggets page */ 
router.get('/delete',secured, nuggets_controllers.nuggets_delete_Page);
 