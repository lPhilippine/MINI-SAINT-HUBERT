var models = require('../models');
var debug = require('debug')('server:server');

class InscriptionService {
  postInscription(body) {
        // TODO Ici contacter bdd et return les data au controller
        models.Taxis.create({ ta_nom: body.ta_nom,
                                ta_prenom: body.ta_prenom,
                                ta_mail: body.ta_mail,
                                ta_portable: body.ta_portable,
                                ta_mdp: body.ta_mdp })
        
    }

    getInscription(variable) {
        // TODO Ici contacter bdd et return les data au controller
        
        debug (variable);
    }
}


module.exports = new InscriptionService();