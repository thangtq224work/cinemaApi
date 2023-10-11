const route = require('express').Router();
const artistRoute = require("./artistRoute");
const filmRoute = require("./filmRoute");
route.use('/artist',artistRoute);
route.use('/film',filmRoute);
module.exports = route;
