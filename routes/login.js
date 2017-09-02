var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.cookieName){
    return res.render('main')
  }else{
    return res.render('login', { title: 'this is login' });
  }
});
router.post('/success', function(req,res,next){

  res.cookie('cookieName','cookie', { maxAge: 900000, httpOnly: true });
   res.redirect('/main')
  
  
})

module.exports = router;
