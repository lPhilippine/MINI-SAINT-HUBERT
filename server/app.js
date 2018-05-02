var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mysql = require('mysql');
var expressLayouts = require('express-ejs-layouts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); // Parse HTML & JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

// ROUTES
var home = require('./routes/home.route');
var users = require('./routes/users.route');
var courses = require('./routes/courses.route');
var inscription =require('./routes/inscription.route');
var inscriptionUsers = require('./routes/inscription-users.route');
var connectionUser = require('./routes/connection-user.route');
var connectionSuccess = require('./routes/connection-success.route');
var connectionClientSuccess = require('./routes/connection-client-success.route')


app.use('/', home); // HOME
app.use('/users', users); // USERS
app.use('/courses', courses); // COURSES
app.use('/home', inscription); //INSCRIPTION
app.use('/inscription', inscription); //INSCRIPTION
app.use('/inscription-users', inscriptionUsers);
app.use('/connectionUser', connectionUser); // CONNECTION USER
app.use('/connectionSuccess', connectionSuccess); // CONNECTION TAXI SUCCESS
app.use('/connectionClientSuccess', connectionClientSuccess); // CONNECTION CLIENT SUCCESS

/**
 * ERRORS
 */
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
