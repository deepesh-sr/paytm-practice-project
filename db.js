const mongoose = require("mongoose");
const { setTheUsername } = require("whatwg-url");

const UserSchema = new mongoose.Schema({
    firstName:{
        type : String , 
        required : true
    },
    lastName: {
        type :String,
        required : true 
    }, 
    password : {
        type : String , 
        required : true,
        minLenght : 8
    }
})

const User = mongoose.model('User' , UserSchema);