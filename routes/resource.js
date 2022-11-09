var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var nuggets_controller = require('../controllers/nuggets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/nuggets', nuggets_controller.nuggets_create_post);
// DELETE request to delete Costume.
router.delete('/nuggets/:id', nuggets_controller.nuggets_delete);
// PUT request to update Costume.
router.put('/nuggets/:id', nuggets_controller.nuggets_update_put);
// GET request for one nuggets.
router.get('/nuggets/:id', nuggets_controller.nuggets_detail);
// GET request for list of all nuggets items.
router.get('/nuggets', nuggets_controller.nuggets_list);
module.exports = router;