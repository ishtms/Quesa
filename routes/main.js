var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(req.cookies.user){
    console.log(req.cookies.user.username)
    return res.render('main')
  }else{
    return res.render('login')
  }
  
});

module.exports = router;
  