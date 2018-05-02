var models = require('../models');
var debug = require('debug')('server:server');


class ConnectionClientSuccessController {
  getClientSuccess(req,res) {
      res.render('connection-client-success', { title: 'Mini Uber' })
  }
}

module.exports = new ConnectionClientSuccessController();