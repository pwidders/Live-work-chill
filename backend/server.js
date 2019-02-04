var axios = require('axios');
var cors = require('cors');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;
var app = express();

// Create instance of cors with Express
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Express server listen
app.listen(port, function() {
    console.log("Server is running on Port: " + port);
})