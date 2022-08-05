// dependencies
const express=require("express")
const path=require('path')
const dotenv=require('dotenv')
const { notFoundHandler, errorHandlers } = require("./middlewares/common/errorHandlers")
const cookieParser = require("cookie-parser")
const authRouter=require('./routes/auth/authRoute')
const mongoose = require('mongoose');

// app initialize
const app=express()
dotenv.config()

// express settings
app.set('view engine','pug')
app.set('views', 'views')

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())

// routing
app.use(authRouter)


// not found handler
app.use(notFoundHandler)


// error handler middleware
app.use(errorHandlers)


// listening
mongoose.connect(process.env.DB_URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})
    .then(()=>{
        console.log("DB connected")
        app.listen(process.env.PORT||3000, ()=>{
            console.log("Server is running on port " +  (process.env.PORT||3000));
        })
    })
    .catch(err=>{
        console.log(err);
    })




