var express = require('express');
var water_controller = require('../controllers/water');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('water', { title: 'Search Results for water Class' });
// });

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET water */ 
router.get('/', water_controller.water_view_all_Page );

// GET request for one water. 
router.get('/waters/:id', water_controller.water_detail);

/* GET detail water page */ 
router.get('/detail', water_controller.water_view_one_Page); 

/* GET create water page */ 
router.get('/create',secured, water_controller.water_create_Page); 

/* GET create update page */ 
router.get('/update',secured, water_controller.water_update_Page);

/* GET delete water page */ 
router.get('/delete',secured, water_controller.water_delete_Page); 

module.exports = router;