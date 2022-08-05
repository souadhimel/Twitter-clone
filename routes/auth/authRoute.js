// dependencies
const {Router}=require("express")
const dotenv=require("dotenv")
const { getlogIn,getregister } = require("../../controllers/auth/authControllers")
const decorateHtmlResponse = require("../../middlewares/common/decorateHtmlResponse")
const router=Router('./routes/auth/authRoute')


// config
dotenv.config()

// get login router
router.get('/login',decorateHtmlResponse(`Login - ${process.env.APP_NAME}`),getlogIn)

// get register router
router.get('/register',decorateHtmlResponse(`Register - ${process.env.APP_NAME}`),getregister)



module.exports=router