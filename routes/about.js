const express = require('express');
var router = express.Router();

var about_controller = require('../controllers/aboutController');

router.get('/', about_controller.get_about);

module.exports = router;