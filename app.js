const express = require('express');
const nano = require('nano')('http://admin:password@localhost:5984');

const app = express();

var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var aboutRouter = require('./routes/about');

app.use(express.json())

app.use('/users', usersRouter);
app.use('/', homeRouter);
app.use('/about', aboutRouter);

module.exports = app;