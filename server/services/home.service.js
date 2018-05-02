var models = require('../models');
var debug = require('debug')('server:server');

class HomeService {
  getHome(variable) {
        // TODO Ici contacter bdd et return les data au controller
        
        debug (variable);
    }
}


module.exports = new HomeService();