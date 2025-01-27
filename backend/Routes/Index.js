const express = require("express")
const router = express.Router()
const isLoggedin = require("../Middlewares/IsLoggedin")
const UserModel = require("../Models/UserModel")

router.get("/Api" ,  async (req , res)=>{
   // let user = await UserModel.findOne({email:req.user.email}).select("-password")
   if(req.cookies.token){
      res.send(true)
   }else{
      res.send(false)
   }
})


router.get("/Api/data" ,isLoggedin ,  async (req , res)=>{
   let user = await UserModel.findOne({email:req.user.email}).populate('Tasks')
res.send(user)
})


module.exports = router