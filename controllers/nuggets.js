var nuggets = require('../models/nuggets');
// List of all Costumes
exports.nuggets_list = function(req, res) {
 res.send('NOT IMPLEMENTED: nuggets list');
};
// for a specific Costume.
exports.nuggets_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: nuggets detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.nuggets_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: nuggets create POST');
};
// Handle Costume delete form on DELETE.
exports.nuggets_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: nuggets delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.nuggets_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: nuggets update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.nuggets_list = async function(req, res) {
    try{
    thenuggets = await nuggets.find();
    res.send(thenuggets);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.nuggets_view_all_Page = async function(req, res) {
    try{
    thenuggets = await nuggets.find();
    res.render('nuggets', { title: 'nuggets Search Results', results: thenuggets });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.nuggets_create_post = async function(req, res) {
    console.log(req.body)
    let document = new nuggets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.nuggets_name = req.body.nuggets_name;
    document.nuggets_size = req.body.nuggets_size;
    document.nuggets_type = req.body.nuggets_type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}