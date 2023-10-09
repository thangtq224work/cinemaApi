const route = require('express').Router();
const actorController = require("../app/controller/actorController");
const validator = require("../app/util/actorValidator");
route.get('/',actorController.getActor);
route.post('/new',validator.newActorValidator,actorController.newActor);
route.put('/edit/:id',validator.newActorValidator,actorController.editActor);
module.exports = route;
