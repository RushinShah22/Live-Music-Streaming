const User = require("./../Models/UserModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async (req, res) => {
    try{
        console.log("Yess");
        const userDetails = await User.create(req.body);

        const token = jwt.sign({ userId: userDetails._id}, process.env.SECRETJWT);
        res.cookie("jwt",  token, {
            httpOnly: true
        })
        res.status(201).json({
            status: "success",
            user: {
                userId: userDetails._id,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                userName: userDetails.userName,
                isSinger: userDetails.isSinger
            }
        })
    }catch(err){
        console.log(err.message);
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}


module.exports.verifyUser = async (req, res) => {

    try{
        
        const user = await User.findOne({userName: req.body.userName});
        if(!user){
            res.status(401).json({
                status: "fail",
                message: "User Not Found!!!"
            })
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if(!passwordMatch){
            res.status(401).json({
                status: "fail",
                message: "User Password wrong!!!"
            })
        }

        const token = jwt.sign({ userId: user._id}, process.env.SECRETJWT);

        res.cookie("jwt",  token, {
            httpOnly: true
        })
        res.status(200).json({
            status: "success",
            message: "User Logged In."
        })

    }catch(err){
        console.log(err.message);
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
    
}

