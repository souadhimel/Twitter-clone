// dependencies
const createError =require('http-errors')


// not Found Handler
function notFoundHandler(req,res,next){
  next(createError(404, "Your requested page is not found!"))  
}

// error handler middleware
function errorHandlers(err,req,res,next){
const error=process.env.NODE_ENV==='development'?err:{message:err.message}


if (res.headersSent) {
        next(error)
    }else{
try {
    res.locals.error=error;
    res.status(error.status||500)
  if (res.locals.html) {
    res.render('pages/error',{
        title:"Error page",
        
    })
}else{
res.json(error)
    }
  }
   
 catch (error) {
    next(error)
}
    }

}

module.exports={
    notFoundHandler,
    errorHandlers
}