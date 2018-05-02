var models = require('../models');
var debug = require('debug')('server:server');

class CoursesService {
  getCourses(variable) {
        // TODO Ici contacter bdd et return les data au controller
        
        debug (variable);
    }

    postCourses(body) {
        // TODO Ici contacter bdd et return les data au controller
        models.Courses.create({ co_date: body.co_date,
                                co_heure: body.co_heure,
                                co_place_necessaire: body.co_place_necessaire,
                                co_prise_charge: body.co_prise_charge,
                                co_destination: body.co_destination })
        
    }
}


module.exports = new CoursesService();