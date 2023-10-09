const route = require('express').Router();
const actorRoute = require("./actorRoute");
const directorRoute = require("./directorRoute");
const filmRoute = require("./filmRoute");
route.use('/actor',actorRoute);
route.use('/director',directorRoute);
route.use('/film',filmRoute);
module.exports = route;
