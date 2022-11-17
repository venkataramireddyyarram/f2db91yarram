var water = require('../models/water'); 
 
// List of all water 
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
// Handle water create on POST. 
exports.water_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new water(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Earp_Name":"Applepods", "Earp_Type":"Medium", "Earp_Size":3.5} 
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



// Handle water update form on PUT. 
exports.water_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await water.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Water_Name)
               toUpdate.Water_Name = req.body.Water_Name;
        if(req.body.Water_Company) toUpdate.Water_Company = req.body.Water_Company;
        if(req.body.Water_cost) toUpdate.Water_cost = req.body.Water_cost;
        if(req.body.Water_Rating) toUpdate.Water_Rating = req.body.Water_Rating;

        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 
  


// Handle water delete on DELETE. 
exports.water_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await water.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.water_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await water.findById( req.query.id) 
        res.render('waterdetail',  { title: 'water Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a water. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.water_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('watercreate', { title: 'water Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a water. 
// query provides the id 
exports.water_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await water.findById(req.query.id) 
        res.render('waterupdate', { title: 'water Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.water_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await water.findById(req.query.id) 
        res.render('waterdelete', { title: 'water Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 