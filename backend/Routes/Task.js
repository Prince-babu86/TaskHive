const express = require("express")
const router = express.Router()
const TaskModel = require("../Models/TaskModel")
const IsLoggedin = require("../Middlewares/IsLoggedin")
const UserModel = require("../Models/UserModel")


router.get("/" , async (req , res)=>{
    let tasks = await TaskModel.find()
   res.send(tasks)

})

router.post('/Create' , IsLoggedin, async (req , res)=>{
    let {title, description , startDate , dueDate, time , priority} = req.body
    let user = await UserModel.findOne({email:req.user.email})
    let task = await TaskModel.create({
        user:user._id,
        title,
        description,
        startDate,
        dueDate,
        time,
        priority
    })
    user.Tasks.push(task._id)
    user.save()
    res.send(task)
})


module.exports = router