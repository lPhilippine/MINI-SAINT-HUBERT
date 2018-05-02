var models = require('../models');
var debug = require('debug')('server:server');

class UserController {
  getUsers(req,res) {
    res.render('layout', { title: 'User' });
  }
}


module.exports = new UserController();