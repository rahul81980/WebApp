let {body} = require("express-validator")


let signUpValidation =[
        body("email").isEmail().withMessage("it should be email")
    ]

module.exports = {signUpValidation}