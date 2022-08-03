# couchdbNodejs

Simple project to create docker image with Couchdb and Nodejs in it.

docker build -t backend .
docker run -p 5984:5984 8080:8080 backend 