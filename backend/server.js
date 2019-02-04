var axios = require('axios');
var cors = require('cors')
var mysql = require('mysql')
var react = require('react')
var reactDom = require('react-dom')
var reactRouterDom = require('react-router-dom')
var reactScripts = require('react-scripts')
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// var routes = require('./controllers/live-work-controller.js');
// app.use('/', routes);
app.listen(port);
console.log(this.state)