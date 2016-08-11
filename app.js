var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var mongoose = require('mongoose');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config');

var userController = require('./controllers/userController');

// Use this port for communication
var port = process.env.PORT || 3000;

// Connect to database
mongoose.connect(config.getDbConnectionString());

// Use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes for users
userController(app);

// Application listening
app.listen(port);