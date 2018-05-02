var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session')

var app = express();

/*
    Setting all necessary structure for the server
 */

// Logger
app.use(logger('dev'));

// Request configuration
require('./middlewares/headers.middleware')(app);

// Static resources
app.use(express.static(path.join(__dirname, '/../public')));

// Routes definition
app.use('/api', require('./routes/routes'));

// Passport middleware
require('./middlewares/authentication.middleware')(app);

// Setting errors management
require('./middlewares/errors-handler.middleware')(app);

// Getting port from environment variable stored in NodeJS, else default port.
var port = process.env.PORT || 3000;
app.set('port', port);

// Creating HTTP server.
var server = http.createServer(app);

// Importing libraries config
require('./utils/libraries.utils').loadLibraries(server, port);

