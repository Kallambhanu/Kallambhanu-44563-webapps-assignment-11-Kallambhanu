var nuggets = require('../models/nuggets');
// List of all nuggetss
exports.nuggets_list = function(req, res) {
 res.send('NOT IMPLEMENTED: nuggets list');
};
// for a specific nuggets.
exports.nuggets_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await nuggets.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle nuggets create on POST.
exports.nuggets_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: nuggets create POST');
};
// Handle nuggets delete form on DELETE.
exports.nuggets_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: nuggets delete DELETE ' + req.params.id);
};
// Handle nuggets update form on PUT.
exports.nuggets_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await nuggets.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.nuggets_type)  toUpdate.nuggets_type = req.body.nuggets_type; 
            if(req.body.cost) toUpdate.cost = req.body.cost; 
            if(req.body.size) toUpdate.size = req.body.size; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
    }; 
// VIEWS

   // List of all nuggetss
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
   // Handle nuggets create on POST.
exports.nuggets_create_post = async function(req, res) {
    console.log(req.body)
    let document = new nuggets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"nuggets_type":"goat", "cost":12, "size":"large"}
    document.nuggets_type = req.body.nuggets_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
//Assignmet 12 part 3
//Handle nuggets delete on DELETE. 
exports.nuggets_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await nuggets.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.nuggets_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await nuggets.findById( req.query.id) 
        res.render('nuggetsdetail',  
{ title: 'nuggets Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a nuggets.
// No body, no in path parameter, no query.
// Does not need to be async
exports.nuggets_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('nuggetscreate', { title: 'nuggets Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for updating a nuggets.
// query provides the id
exports.nuggets_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await nuggets.findById(req.query.id)
    res.render('nuggetsupdate', { title: 'nuggets Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle a delete one view with id from query 
exports.nuggets_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await nuggets.findById(req.query.id) 
        res.render('nuggetsdelete', { title: 'nuggets Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 