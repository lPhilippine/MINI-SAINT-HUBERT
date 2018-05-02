var express = require('express');
var router = express.Router();
var InscriptionUsersController = require('../controllers/inscription-users.controller')

/* GET courses page. */
router.get('/', InscriptionUsersController.getInscription);

router.post('/',InscriptionUsersController.postInscription);

module.exports = router;