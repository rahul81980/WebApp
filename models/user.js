const mongoose = require("mongoose")

let user = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    otp:{
        type:String
    },
    otpExp:{
        type:Date
    },
    status:{
        type:Number
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model("user",user)