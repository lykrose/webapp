const express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersController');

router.get('/', users_controller.user_list);

router.get('/:id', users_controller.user_get);

router.post('/', users_controller.user_create);

router.delete('/:id/:rev', users_controller.user_delete);

module.exports = router