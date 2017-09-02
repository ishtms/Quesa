var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var login = require('./routes/login');
var main = require('./routes/main');
var confirm_login = require('./routes/confirm_login');

var app = express();

mongoose.connect('mongodb://ishfired:390775866@ds121494.mlab.com:21494/quesa', function(err){
  if(err){
    console.log("There was an error connecting to database", err);
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('*@&#^$JLKJKAlkjsdf@(*&@#$lkjdfj120398123##'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', login);
app.use('/main', main);
app.use('/confirm_login/quesa/', confirm_login)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
