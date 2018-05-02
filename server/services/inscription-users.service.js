var models = require('../models');
var debug = require('debug')('server:server');

class InscriptionUsersService {
  postInscription(body) {
        // TODO Ici contacter bdd et return les data au controller
        models.Client.create({ cl_nom: body.cl_nom,
                                cl_prenom: body.cl_prenom,
                                cl_mail: body.cl_mail,
                                cl_portable: body.cl_portable,
                                cl_mdp: body.cl_mdp })
        
    }

    getInscription(variable) {
        // TODO Ici contacter bdd et return les data au controller
        
        debug (variable);
    }
}


module.exports = new InscriptionUsersService();