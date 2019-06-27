const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
// app.use(cors())
// import proxy from 'http-proxy-middleware'
// app.use('/api/**', proxy({ target: "http://localhost:3001" }));
//Configuring mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configuring mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configuring isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
// app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use(cors({
  origin: 'http://localhost',
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options('*', cors())


app.all('', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  //Auth Each API Request created by user.
  next();
});


if(!isProduction) {
  app.use(errorHandler());
}

//Configuring Mongoose
mongoose.connect('mongodb://localhost/YOLO');
mongoose.set('debug', true);

// connecting Models and routes
require('./models/user');
require('./config/passport');
app.use(require('./routes'));

//Error handlers & middlewares
if(!isProduction) {
    app.use((err, req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(err.status || 500);
  
      res.json({
        errors: {
          message: err.message,
          error: err,

        },
      });
    });
  }
  
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


  app.use((err, req, res) => {
    res.status(err.status || 500);
  
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });
  
  app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
  