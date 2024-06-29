const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const rootControllers = require("./Controllers/rootControllers");
const UserRouter = require("./Routes/UserRoute");
const SingerRouter = require("./Routes/SingerRoute");
const RegisterRouter = require("./Routes/RegisterRoute");
const SignInRouter = require("./Routes/SignInRoute");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", rootControllers.getDefaultData);

// app.use("/v1/user", UserRouter);
app.use("/v1/singer", SingerRouter);
app.use("/v1/register", RegisterRouter);
app.use("/v1/signin", SignInRouter);


app.all("*", (req, res, next) => {

})

module.exports = app;