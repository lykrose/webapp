
const express = require('express');
const nano = require('nano')('http://admin:password@localhost:5984');

const PORT = process.env.PORT || 8080;

const app = express();

var usersRouter = require('./routes/users');

app.use(express.json())

app.use('/users', usersRouter);


app.listen(PORT)
console.log('Running on ${PORT}');