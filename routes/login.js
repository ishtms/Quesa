var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(req.query.url, { title: 'this is login' });
  console.log('this is called')
});


module.exports = router;
