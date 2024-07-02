const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("connected successfully");
}).catch(()=>{
    console.log("An error occur");
})
const db = mongoose.connection
db.on("open",()=>console.log("connection open"))

db.on("error",()=>console.log("an error occur"))

module.exports = db