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
cd webapp
cd backend
node server.js &
sleep 5
node couchdb/db_init.js
cd ..
npm start