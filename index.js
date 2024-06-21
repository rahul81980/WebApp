const express = require("express")
require("dotenv").config()
const app = express()
const Db = require("./db")
let port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded())


app.listen(port ,()=>{
    console.log(port,"server start");
})


