const decorateHtmlResponse=(page_title)=>{
    return(req,res,next)=>{
        res.locals.html=true;
        res.locals.title=page_title;
        next()
    }
}
module.exports=decorateHtmlResponse;