const route = require('express').Router();
const filmController = require("../app/controller/filmController");
const validator = require("../app/util/filmValidator");
route.get('/',filmController.getFilm);
route.post('/new',validator.newFilmValidator,filmController.newFilm);
route.put('/edit/:id',validator.newFilmValidator,filmController.editFilm);
module.exports = route;
