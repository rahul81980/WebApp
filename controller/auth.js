const User = require("../models/user")

exports.signUp = async (req,res)=>{
    let {name,email,otp,password} = req.body
    try{

    }
    catch(err){
     console.log(err);
     res.stauts(400).send({
        status:"failed",
        statusCode:400,
        message:err.message,
        data:[]
     })
    }
}