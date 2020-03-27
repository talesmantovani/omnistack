const routes = require('express').Router()
const OngController = require('./controllers/OngsController')
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

//ONGS
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

//INCIDENTS
routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

//PROFILE
routes.get("/profile", ProfileController.index);

//LOGIN
routes.post("/sessions", SessionController.create);

module.exports = routes;
