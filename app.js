const express = require('express');
const nano = require('nano')('http://admin:password@localhost:5984');

const app = express();

var usersRouter = require('./routes/users');

app.use(express.json())

app.use('/users', usersRouter);

module.exports = app;