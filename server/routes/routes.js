var express = require("express");
var router = express.Router();

var ConnectionClientSuccessController = require("../controllers/connection-client-success.controller");
var ConnectionSuccessController = require("../controllers/connection-success.controller");
var ConnectionUserController = require("../controllers/connection-user.controller");
var CoursesController = require("../controllers/courses.controller");
var HomeController = require("../controllers/home.controller");
var InscriptionUsersController = require("../controllers/inscription-users.controller");
var InscriptionController = require("../controllers/inscription.controller");
var usersController = require("../controllers/users.controller");

router.get("/", ConnectionClientSuccessController.getClientSuccess);

router.get("/", ConnectionSuccessController.getSuccess);

router.get("/", ConnectionUserController.getUser);

router.get("/", CoursesController.getCourses);

router.post("/", CoursesController.postCourses);

router.get("/", HomeController.getHome);

router.get("/", InscriptionUsersController.getInscription);

router.post("/signupUser", InscriptionUsersController.postInscription);

router.get("/", InscriptionUsersController.getInscription);

router.post("/signupDriver", InscriptionController.postInscription);

router.get("/", usersController.getUsers);

module.exports = router;
