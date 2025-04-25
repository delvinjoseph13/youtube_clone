import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()


export const authorization=(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const token=authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({message:"Access denied no token pAccess Denied No token provided"})
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({message:"Invalid Token"})
        }
        req.user=user;
        next()
    })

}