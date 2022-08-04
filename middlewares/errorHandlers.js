// dependencies



// not Found Handler
function notFoundHandler(req,res){
    res.status(404).send('404, Page not found!!')
}

// error handler middleware
function errorHandlers(error,req,res,next){
console.log(error)
    if (res.headersSent) {
        next()
    }else{
return res.status(500).send(error.message)
    }

}

module.exports={
    notFoundHandler,
    errorHandlers
}