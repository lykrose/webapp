var nano = require('nano')('http://admin:password@localhost:5984');

var databases = ['users'];

databases.forEach(function(entry) {
    console.log(entry);

    // create a new database if it does not exist already
    nano.db.create(entry, (err, data) => {
        if (err) {
            console.log('Error:',err.message);
        } else {
            var new_db = nano.use(entry)
            var data = require("./data/" + entry + ".json");
            new_db.bulk(data).then((body) => {
                console.log(body);
            });
        };
    });
});

