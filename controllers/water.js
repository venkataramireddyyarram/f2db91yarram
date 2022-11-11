var water = require('../models/water');
// List of all waters
exports.water_list = function(req, res) {
    res.send('NOT IMPLEMENTED: water list');
};
// for a specific water.
exports.water_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await water.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle water create on POST.
exports.water_create_post = async function(req, res) {
    console.log(req.body)
    let document = new water();
    document.Water_Name = req.body.Water_Name;
    document.Water_Company = req.body.Water_Company;
    document.Water_cost = req.body.Water_cost;
    document.Water_Rating = req.body.Water_Rating;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle water delete form on DELETE.
exports.water_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: water delete DELETE ' + req.params.id);
};
// Handle water update form on PUT.
exports.water_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: water update PUT' + req.params.id);
};
exports.water_list = async function(req, res) {
    try{
        thewaters = await water.find();
        res.send(thewaters);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle Water update form on PUT.
exports.water_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await water.findById( req.params.id)
        // Do updates of properties
        if(req.body.Water_Name)
               toUpdate.Water_Name = req.body.Water_Name;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.Rating) toUpdate.Rating = req.body.Rating;
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
// Handle a show all view
exports.water_view_all_Page = async function(req, res) {
    try{
        thewaters = await water.find();
        res.render('water', { title: 'water Search Results', results: thewaters });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};