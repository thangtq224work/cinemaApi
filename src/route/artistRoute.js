const route = require('express').Router();
const actorController = require("../app/controller/artistController");
const validator = require("../app/util/artistValidator");
route.get('/',actorController.getArtist);
route.post('/new',validator.newArtistValidator,actorController.newArtist);
route.put('/edit/:id',validator.editArtistValidator,actorController.editArtist);
module.exports = route;
