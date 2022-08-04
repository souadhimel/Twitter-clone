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

module.exports={
    getlogIn,
    getregister
}