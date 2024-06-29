const streamControllers = require("./../Controllers/streamControllers");
const authControllers = require("./../Controllers/authControllers");
const express = require("express");

const Router = express.Router();

Router.route("/:id").get(streamControllers.getStream).post(authControllers.isLoggedIn, streamControllers.createStream).patch(authControllers.isLoggedIn, streamControllers.updateStream).delete(authControllers.isLoggedIn, streamControllers.deleteSteam);
Router.route("/").get(streamControllers.getAllStream);

module.exports = Router;