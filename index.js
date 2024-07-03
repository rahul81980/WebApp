const express = require("express")
require("dotenv").config()
const app = express()
const router  = require("./router/auth")
const Db = require("./db")
let port = process.env.PORT || 2000
app.use(express.json())
app.use(express.urlencoded())

app.use("/user",router)

app.listen(port ,()=>{
    console.log(port,"server start");
})


