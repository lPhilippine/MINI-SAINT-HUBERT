var express = require('express');
var router = express.Router();
var ConnectionClientSuccessController = require('../controllers/connection-client-success.controller')

/* GET courses page. */
router.get('/', ConnectionClientSuccessController.getClientSuccess);

module.exports = router;