// toturial: https://www.youtube.com/watch?v=-3vvxn78MH4

//https://nodejs.org/en/
//https://expressjs.com/en/starter/generator.html
//https://getbootstrap.com/docs/4.1/getting-started/download/
//https://code.jquery.com/
//https://fontawesome.com/

// opzet: zet snel een node/express app op.
// npm install express-generator -g (global)
// ga in cmd naar de map waar je in wilt zijn en doe...express "naam nieuwe map" --hbs (handelbars template)
// cd in de "naam nieuwe map" npm install
// npm start (localhost:3000)
// nieuwe terminal en doe in folder npm install --save express-handebars

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//onthoud dat in het begin iets anders is gegaan, de jason-lock
var expressHbs = require('express-handlebars');
// mongodb en mongoose geinstalleerd (mongoose via terminal want nodejs)
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');

var app = express();

//app connecten aan mongodb server, shopping word aangemaakt volgens mij
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}))
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
