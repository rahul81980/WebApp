const User = require("../models/user")
const bcrypt = require("bcrypt")
exports.signUp = async (req,res)=>{
    let {name,email,otp,password} = req.body
    try{
     if(!otp){
        let userExist = await User.findOne({email,status:0})
        otp = await bcrypt.hash("1234",10)
       password = await bcrypt.hash(password.toString(),10)
       let otpExp = new Date()
       otpExp.setMinutes(otpExp.getMinutes() + 5)
       if(userExist){
      let data =  await User.findOneAndUpdate({email,status:0},{name,email,otp,otpExp,password},{new:true})
      console.log({data});  
      return res.status(200).send({
            status:"success",
            statusCode:200,
            message:"otp send successfully",
            data:1234
        })
       }
        let user = new User({
            name ,
            otp,
            otpExp,
            password,
            status:0,
            email
        })
        await user.save()
        return res.status(200).send({
            status:"success",
            statusCode:200,
            message:"otp send sussessfully",
            data:1234
        })
     }
     else{
        let user = await User.findOne({email,status:0 })
        if(!user){
            return res.status(400).send({
                status:"failed",
                statusCode:400,
                message:"user Data not found",
                data:[]
            })
        }
        let otpCheck = await bcrypt.compare(user.otp,otp)
        if(!otpCheck || user.otpExp < new Date()){
            let msg = !otpCheck ? "invalid otp" : "otp time expire"
            return res.status(400).send({
                status:"failed",
                statusCode:400,
                message:msg,
                data:[]
            })
        }
        user.status = 1 
        user.otp = undefined
        await user.save()
        res.status(200).send({
            status:"success",
            statusCode:200,
            message:"user signUp successfully",
            data:[]
        })
     }
    }
    catch(err){
     console.log(err);
     res.status(400).send({
        status:"failed",
        statusCode:400,
        message:err.message,
        data:[]
     })
    }
}