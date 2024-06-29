const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const rootControllers = require("./Controllers/rootControllers");
const UserRouter = require("./Routes/UserRoute");
const RegisterRouter = require("./Routes/RegisterRoute");
const SignInRouter = require("./Routes/SignInRoute");
const StreamRouter = require("./Routes/StreamRoute");

const app = express();


app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'], // List of allowed origins (domains)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers in request
    credentials: true, // Allow cookies to be sent cross-origin
  }));
app.use(cookieParser());

// app.get("/", rootControllers.getDefaultData);

// app.use("/v1/user", UserRouter);
app.use("/v1/register", RegisterRouter);
app.use("/v1/signin", SignInRouter);
app.use("/v1/streams", StreamRouter);


app.all("*", (req, res, next) => {

})

module.exports = app;