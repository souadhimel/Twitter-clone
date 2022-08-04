// dependencies

const express=require("express")
const path=require('path')
const { notFoundHandler, errorHandlers } = require("./middlewares/errorHandlers")

// app initialize
const app=express()


// express settings
app.set('view engine','pug')
app.set('views', 'views')

// middleware
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))


// routing
app.get('/',(req,res)=>{
    res.render('index')
})


// not found handler
app.use(notFoundHandler)


// error handler middleware
app.use(errorHandlers)


// listening
app.listen(process.env.PORT||3000, ()=>{
    console.log("Server is running on port " +  (process.env.PORT||3000) )
})



