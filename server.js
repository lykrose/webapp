
const express = require('express');
const nano = require('nano')('http://admin:password@localhost:5984');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

var usersRouter = require('./routes/users');

app.use(express.json())

app.use('/users', usersRouter);


app.listen(PORT, HOST)
console.log('Running on ${HOST}:${PORT}');