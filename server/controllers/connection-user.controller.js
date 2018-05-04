var models = require('../models');
var debug = require('debug')('server:server');
var CoursesService = require('../services/courses.service')
var bcrypt = require('bcrypt-nodejs');
var jwtUtils = require('../utils/jwt.utils');

class ConnectionUserController {
  getUser(req,res) {
//    CoursesService.getCourses(req.body).then(
      res.render('connection-user', { title: 'Connexion Utilisateur' })
//    );
  }

  login(req, res) {

    // Param

    var email = req.body.email;
    var password = req.body.password;

    if(email == null || password == null) {
      return res.status(400).json({'error':'missing parameters'});
    }
    models.Clients.findOne({
      where: {email: cl_email}
    })
    .then(function(userFound) {
      if(userFound) {
        bcrypt.compare(password, userFound.password, function(errBycript, resBycrypt) {
          if(resBycrypt) {
            return res.status(200).json({
              'userId': newUser.id,
              'token': jwtUtils.generateTokenForUser(userFound)
            });
          } else {
            return res.status(403).json({"error": "Invalid Password"});
          }
        });

      }
    })
    .catch(function(err) {
      return res.status(500).json({ 'error':'unable to verify user'});
    })
  }

}

module.exports = new ConnectionUserController();