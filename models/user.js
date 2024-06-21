const mongoose = require("mongoose")

let user = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    otp:{
        type:Number
    },
    otpExp:{
        type:Date
    },
    status:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model("user",user)