const express = require("express");
const bodyParser = require('body-parser');
const port = process.env.port || 5000;
const database = require('./app/database/connect');
const dotenv = require('dotenv');
const route = require("./route/route");
dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(route);
database.connect();

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})