var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('back');
  console.log('this is called')
  
});

module.exports = router;
