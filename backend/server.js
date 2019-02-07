var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var PORT = process.env.PORT || 3000;
var app = express();
var Sequelize = require('Sequelize');
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load()
const routes = require("./routes");

// Requiring our models for syncing
var db = require('./models');

// Add routes, both API and view
app.use(routes);

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

// Initialize passport, express session and passport session
app.use(session({
  secret: process.env.PASSPORT_SECRET,
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Routes - Import our auth.js file
var authRoute = require('./controllers/auth.js')(app,passport); // Added passport as an argument to pass its functionality to auth.js
 
// load passport strategies
require('./config/passport/passport.js')(passport, db.Users);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});