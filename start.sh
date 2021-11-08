#!/bin/bash 
cd ..
cd opt
cd couchdb
cd bin
./couchdb &
sleep 5
cd ..
cd ..
cd ..
cd app
node couchdb/db_init.js
node server.js
