const express = require("express")
const router = express.Router()
const authController = require("../controller/auth")
const {validationresult} = require("../middleware/validate")
const {signUpValidation} = require("../middleware/middleWare")
router.post("/signUp",signUpValidation,validationresult, authController.signUp)




module.exports = router