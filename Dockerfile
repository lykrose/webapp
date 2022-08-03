FROM couchdb 
COPY local.ini /opt/couchdb/etc/
RUN apt-get update && apt-get install -y \
    software-properties-common \
    npm
RUN npm install npm@latest -g && \
    npm install n -g && \
    n latest
WORKDIR /webapp
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 3000 8080
CMD bash /webapp/start.sh