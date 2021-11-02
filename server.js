
const express = require('express');
const NodeCouchDb = require('node-couchdb');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const couch = new NodeCouchDb();

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST)
console.log('Running on ${HOST}:${PORT}');