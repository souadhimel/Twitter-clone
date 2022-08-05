// dependencies




// get login page
const getlogIn=(req,res,next)=>{
    try {
        res.render('pages/login')
    } catch (error) {
        next(error)
    }
}
// get register page
const getregister=(req,res,next)=>{
    try {
        res.render('pages/register')
    } catch (error) {
        next(error)
    }
}

// register controller
const register=(req,res,next)=>{
    console.log(req.file);
    console.log(req.body);
}

module.exports={
    getlogIn,
    getregister,
    register
}