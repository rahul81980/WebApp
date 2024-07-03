const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log("An error occur",err.message);
})
const db = mongoose.connection
db.on("open",()=>console.log("connection open"))

db.on("error",(err)=>console.log("an error occur",err.message))

module.exports = db