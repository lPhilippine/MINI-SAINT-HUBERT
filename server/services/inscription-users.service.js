var models = require('../models');
var debug = require('debug')('server:server');

class InscriptionUsersService {
  postInscription(body, callback) {
    var response = models.Client.create({ 
        cl_nom: body.cl_nom,
        cl_prenom: body.cl_prenom,
        cl_mail: body.cl_mail,
        cl_portable: body.cl_portable,
        cl_mdp: body.cl_mdp 
    });

    response.then(client =>{
        body.cl_id = client.cl_id;

    });
        
    }

    getInscription(variable) {
        // TODO Ici contacter bdd et return les data au controller
        
        debug (variable);
    }
}


module.exports = new InscriptionUsersService();