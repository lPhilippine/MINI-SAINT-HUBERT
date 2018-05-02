var models = require('../models');
var debug = require('debug')('server:server');
var HomeService = require('../services/home.service')

class HomeController {
  getHome(req,res) {
    //HomeService.getHome(req.body).then(
      res.render('home', { title: 'Mini Uber' })
    //);
  }
}

module.exports = new HomeController();