var express = require('express');
var path = require('path');

var app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
