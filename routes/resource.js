var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var water_controller = require('../controllers/water');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// water ROUTES ///
// POST request for creating a water.  
router.post('/waters', water_controller.water_create_post);
// DELETE request to delete water.
router.delete('/waters/:id', water_controller.water_delete);
// PUT request to update water.
router.put('/waters/:id', water_controller.water_update_put);
// GET request for one water.
router.get('/waters/:id', water_controller.water_detail);
// GET request for list of all water items.
router.get('/waters', water_controller.water_list);
module.exports = router;
// GET request for one water.
router.get('/water/:id', water_controller.water_detail);
// Handle Costume delete on DELETE.
exports.costume_delete = async function(req, res) {
 console.log("delete " + req.params.id)
 try {
 result = await Costume.findByIdAndDelete( req.params.id)
 console.log("Removed " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": Error deleting ${err}}`);
 }
};