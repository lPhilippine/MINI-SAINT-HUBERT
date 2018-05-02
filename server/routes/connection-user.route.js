var express = require('express');
var router = express.Router();
var ConnectionUserController = require('../controllers/connection-user.controller')

/* GET courses page. */
router.get('/', ConnectionUserController.getUser);

module.exports = router;