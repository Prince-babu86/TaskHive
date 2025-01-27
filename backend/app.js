const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const cors = require("cors")
const indexRouter = require("./Routes/Index")
const TaskRouter = require("./Routes/Task")
const UserRouter = require("./Routes/User")
const db = require("./DB/DbConnection")
const cookieParser = require('cookie-parser')
db()

const corsOptions = {
    origin: 'http://localhost:5173/', // Specify your frontend domain
    credentials: true, // Allow cookies to be sent
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));


app.use("/" , indexRouter)
app.use("/task" , TaskRouter)
app.use("/user" , UserRouter)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))