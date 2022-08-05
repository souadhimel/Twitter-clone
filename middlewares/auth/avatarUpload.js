const upload = require("multer-uploader")
const path=require('path')

function avatarUpload(req,res,next){
const uploadDir=path.join(__dirname, "/../../public/uploads")
const maxFileSize=1000000;
const allowed_mime_type=['image/png','image/jpg','image/jpeg','image/svg+xml']

    upload(uploadDir,maxFileSize,allowed_mime_type).single('profileAvatar')(req,res,(err)=>{
if (err) {
    const user=req.body;
    res.render('pages/register',{
        user,
        error
    })

} else {
   next()
}
    })
}
module.exports=avatarUpload