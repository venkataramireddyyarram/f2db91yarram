var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('water', { title: 'search results for water class' });
});

module.exports = router;