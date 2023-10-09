const route = require('express').Router();
const directorController = require("../app/controller/directorController");
const validator = require("../app/util/actorValidator");
route.get('/',directorController.getDirector);
route.post('/new',validator.newActorValidator,directorController.newDirector);
route.put('/edit/:id',validator.newActorValidator,directorController.editDirector);
module.exports = route;
