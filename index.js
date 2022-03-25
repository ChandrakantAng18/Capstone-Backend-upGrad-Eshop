const express = require("express");
const connect = require("./config/db");
const PORT = 8000;
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connect();

app.listen(PORT, () => console.log("the server is started ✈"));
