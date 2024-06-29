const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const mongoURI = process.env.mongoURI.replace("<password>", process.env.MONGOPASS);
const port = process.env.PORT || 5000;

mongoose.connect(mongoURI).then(() => {
    console.log("Database connected");
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })
})