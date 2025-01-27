const jwt = require('jsonwebtoken')
const userModel = require("../Models/UserModel")
const UserModel = require('../Models/UserModel')

module.exports = async (req , res , next) => {
    try {
        let decoded = jwt.verify(req.cookies.token , process.env.JWT_KEY)
        let user = await UserModel.findOne({email:decoded.email})
        .select("-password")
         req.user = user
         next()
    } catch (error) {
        console.log(error.message)
    }
}