const route = require('express').Router();
const actorRoute = require("./actorRoute");
route.use('/actor',actorRoute);
module.exports = route;
