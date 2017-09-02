var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'this is login' });
  console.log('this is called')
});
router.get('/success', function(req,res,next){
  return res.redirect('/main');s
})

module.exports = router;
