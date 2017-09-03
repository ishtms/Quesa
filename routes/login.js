var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.user){
    return res.render('main')
  }else{
    return res.render('login', { title: 'this is login' });
  }
});
router.post('/success', function(req,res,next){
if(req.body.logout){
  console.log('clearCookies')
  res.clearCookie('user');
  res.redirect('/');
}else{

  res.cookie('user',{username: req.body.username}, { maxAge: 86400000, httpOnly: true });
  res.redirect('/main')
}
  
  
})

module.exports = router;
