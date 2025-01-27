const express = require("express")
const { RegisterUser, LoginUser } = require("../Controllers/Auth")
const { route } = require("./Index")
const IsLoggedin = require("../Middlewares/IsLoggedin")
const router = express.Router()


router.get("/" , (req , res)=>{
   res.send("User page")
})

router.post("/Register" , RegisterUser )
router.post("/Login" , LoginUser)


module.exports = router