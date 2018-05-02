var models = require('../models');
var debug = require('debug')('server:server');


class ConnectionSuccessController {
  getSuccess(req,res) {
      res.render('connection-success', { title: 'Mini Uber' })
  }
}

module.exports = new ConnectionSuccessController();