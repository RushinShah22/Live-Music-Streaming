const express = require("express");
const authControllers = require("./../Controllers/authControllers");
const Router = express.Router();

Router.route("/").post(authControllers.registerUser);

module.exports = Router;