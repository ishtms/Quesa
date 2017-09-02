var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'this is login' });
  console.log('this is called')
});
router.post('/success', function(req,res,next){
  res.location('/main');
  res.redirect('/main')
})

module.exports = router;
