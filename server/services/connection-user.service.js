var models = require('../models');
var debug = require('debug')('server:server');

class ConnectionUserService {
  getUser(variable) {
        // TODO Ici contacter bdd et return les data au controller
        
        debug (variable);
    }
}


module.exports = new ConnectionUserService();