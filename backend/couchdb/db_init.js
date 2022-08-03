var nano = require('nano')('http://admin:password@localhost:5984');

nano.db.create("_users")

// create a new database if it does not exist already
nano.db.create("users", (err, data) => {
    if (err) {
        console.log('Error:',err.message);
    } else {
        var new_db = nano.use("users")
        var data = require("./data/users.json");
        new_db.bulk(data).then((body) => {
            console.log(body);
        });
    };
});