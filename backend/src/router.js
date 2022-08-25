const express = require("express");
const controllerUser = require("./controllers/userscontroller");

const routes = express.Router();

routes.post("/delete", controllerUser.Delete);
routes.post("/create", controllerUser.Create);
routes.post("/update", controllerUser.Update);
routes.get("/list", controllerUser.List);
routes.get("/getone", controllerUser.GetOne);

module.exports = routes;
