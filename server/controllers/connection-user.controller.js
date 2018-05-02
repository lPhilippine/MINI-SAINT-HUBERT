var models = require('../models');
var debug = require('debug')('server:server');
var CoursesService = require('../services/courses.service')

class ConnectionUserController {
  getUser(req,res) {
//    CoursesService.getCourses(req.body).then(
      res.render('connection-user', { title: 'Connexion Utilisateur' })
//    );
  }
}

module.exports = new ConnectionUserController();