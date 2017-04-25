/**
 * Created by nwalker on 4/25/17.
 */

//
//Modules
//

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

//
// Express
//

var app = express();

//log all requests
app.use(morgan('dev'));

// accept application/json requests
app.use(bodyParser.json());

// accept application/x-www-form-urlencoded in requests
app.use(bodyParser.urlencoded({extended: true}));

// enable cors
app.use(cors());

//
// Angular Application
//

// serve static files from public directory (assets, css, js, etc)
app.use(express.static('public'));

// default route handler (angular application)
app.get('/', function(req, res){
    res.sendFile('./public/index.html');
});

module.exports = app;