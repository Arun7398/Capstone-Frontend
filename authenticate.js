import jwt from 'jsonwebtoken'
export const authenticates=(req,res,next)=>{
    let decode = jwt.verify(req.headers.auth,process.env.JWT)
    if(decode){
    next();
    }
    else{
        res.json({message:'Unauthorized'})
    }
}