const express = require("express");
const api = express();
const routes = require("./router");

api.use(express.json());
api.use(routes);

api.listen(4200);

require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
