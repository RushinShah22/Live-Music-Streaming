const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "A User must have a first name."]
    },
    userName:{
        type: String,
        required: [true, "A user must have a user name."],
        unique: [true, "A user's username must be unique"]
    },
    lastName:{
        type: String, 
        requied: [true, "A User must have a last name."]
    },
    isSinger:{
        type: Boolean,
        required: [true, "A user must have a type: either singer or not."]
    },
    email:{
        type: String,
        required: [true, "A user must have a email."],
        unique: [true, "A user's email must be unique"]
    },
    password: {
        type: String,
        required: [true, "A user must have a password."]
    },
    subscribedTo: {
        type: [mongoose.ObjectId],
        required: function(){return this.isSinger;}
    },
    genres: {
        type: [String],
        required: function(){return this.isSinger;}
    },
    streams: {
        type: [mongoose.ObjectId]
    }

});



UserSchema.pre('save', async function(next) {
    const passwrd = this.password;
    const hashedPassword = await bcrypt.hash(passwrd, 10);
    this.password = hashedPassword;
    next();

})

const User = mongoose.model('User', UserSchema);

module.exports = User
