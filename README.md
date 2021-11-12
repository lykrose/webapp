# couchdbNodejs

Simple project to create docker image with Couchdb and Nodejs in it.

docker build . -t mixed

docker run -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=password -d -p 5984:5984 mixed

docker run -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=password -d -p 5984:5984 -p 8080:8080 mixed

docker volume rm $(docker volume ls -q)
