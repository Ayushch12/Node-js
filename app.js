const config = require("./config");
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const users = require("./app/users"); // Check if this path is correct

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log(`API is running on a "${config.NODE_ENV}" environment.`);
app.get("/", function(req, res) {
  res.json({
    message: "It works!!"
  });
});

// Hey whast up!! endpoint
app.use('/', function(req, res) {
  res.send('HEY whats up!!');
});

// HELLO WORLD endpoint
app.get('/', function(req, res) {
  res.send('HELLO WORLD');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  let errorMessage = {};
  errorMessage.message = err.message;
  errorMessage.error = req.app.get('env') === 'development' ? err : {};
  errorMessage.status = err.status || 500;

  res.status(errorMessage.status).json(errorMessage);
});

module.exports = app;
