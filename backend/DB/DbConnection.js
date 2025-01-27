const mongoose = require("mongoose")
require('dotenv').config();


const MONGODB_URI = (process.env.MONGODB_URI)

const connectDb = async () => {
    try {
        await mongoose.connect(`${MONGODB_URI}/TaskHive`)
        console.log(`MongoDb connected ${MONGODB_URI}`)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDb