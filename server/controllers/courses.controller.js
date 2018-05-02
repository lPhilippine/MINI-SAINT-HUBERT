var models = require('../models');
var debug = require('debug')('server:server');
var CoursesService = require('../services/courses.service')

class CoursesController {
  getCourses(req,res) {
//    CoursesService.getCourses(req.body).then(
      res.render('courses', { title: 'Mini Uber' })
//    );
  }

  postCourses(req,res) {
    CoursesService.postCourses(req.body);
      
      res.redirect('/');

}
}

module.exports = new CoursesController();