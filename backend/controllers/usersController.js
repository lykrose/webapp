
const nano = require('nano')('http://admin:password@localhost:5984');
const users = nano.use('users')


exports.user_list = (req, res) => {
    users.view('users', 'all', (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log(data)
            res.send(data)
        } 
    });
};

exports.user_get = (req, res) => {
    users.get(req.params.id, (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log(data)
            res.send(data)
        }
    });
}

exports.user_create = (req, res) => {
    console.log(req.body)
    users.insert(req.body, (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('Doc created successfully')
            res.send('Ok')
        }
    });
}

exports.user_delete = (req, res) => {
    users.destroy(req.params.id, req.params.rev, (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log('Document deleted successfully')
            res.send('Ok')
        }
    });
}