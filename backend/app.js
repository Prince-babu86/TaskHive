const express = require('express')
const app = express()
const path = require('path')
const cors = require("cors")
const indexRouter = require("./Routes/Index")
const TaskRouter = require("./Routes/Task")
const UserRouter = require("./Routes/User")
const db = require("./DB/DbConnection")
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 4000
db()

const corsOptions = {
    origin: 'https://taskhive-frontend.onrender.com/', // Specify your frontend domain
    credentials: true, // Allow cookies to be sent
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

  

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: 'https://taskhive-frontend.onrender.com/', credentials: true }));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));


app.use("/" , indexRouter)
app.use("/task" , TaskRouter)
app.use("/user" , UserRouter)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))