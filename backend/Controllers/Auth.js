const UserModel = require("../Models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { generateToken } = require("../Utils/GenerateToken")



module.exports.RegisterUser = async (req , res) => {
 try {
    let {name , password , email} = req.body
    let user = await UserModel.findOne({email})
    if(user) return res.send("User already exists")
    bcrypt.genSalt(10 , function(err , salt){
        bcrypt.hash(password , salt , async function(err , hash) {
           let user = await UserModel.create({
            name , 
            email , 
            password:hash
           })
           let token = generateToken((user))
           res.cookie("token" , token ,  {
            httpOnly: true, 
            secure: false,
            sameSite: 'strict', 
        })
           res.send("User Registered")
        })
    })
 } catch (error) {
   res.send(error.message)
 }
}


module.exports.LoginUser = async (req , res) => {
   try {
      let {email , password} = req.body
      let user = await UserModel.findOne({email})
      if(!user) return res.status(404).send("User password incorrect")
         else
      {
         bcrypt.compare(password , user.password , function(err , result){
            if(!result) return res.status(404).send("Incorrect password")
               else{
               let token = generateToken(user)
               res.cookie("token" , token)
               res.send("welcome you are logggen in")
            }
         })
      }
   } catch (error) {
      console.log(error.message)
   }
}