var axios = require('axios');
var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var PORT = process.env.PORT || 3000;
var app = express();
var Sequelize = require('Sequelize');

// Requiring our models for syncing
var db = require('./models');

// Creates connection with Sequelize
const connection = new Sequelize('live_work_chill_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});

// Create instance of cors with Express
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});