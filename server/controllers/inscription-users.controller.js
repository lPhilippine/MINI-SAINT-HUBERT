var models = require('../models');
var debug = require('debug')('server:server');
var InscriptionUsersService = require('../services/inscription-users.service')

class InscriptionUsersController {
  getInscription(req, res) {
    //HomeService.getHome(req.body).then(
    res.render('inscription-users', { title: 'Mini Uber' })
    //);
  }

  postInscription(req, res) {
    InscriptionUsersService.postInscription(req.body);

    res.redirect('/connectionClientSuccess');

  }
}

module.exports = new InscriptionUsersController();