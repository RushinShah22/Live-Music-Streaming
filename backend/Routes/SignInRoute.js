const express = require("express");
const authContollers = require("./../Controllers/authControllers");
const Router = express.Router();

Router.route("/").post(authContollers.verifyUser);

module.exports = Router;