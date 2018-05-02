var express = require('express');
var router = express.Router();
var ConnectionSuccessController = require('../controllers/connection-success.controller')

/* GET courses page. */
router.get('/', ConnectionSuccessController.getSuccess);

module.exports = router;