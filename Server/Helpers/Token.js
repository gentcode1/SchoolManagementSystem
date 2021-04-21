import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config({path:"../../.env"});
export const generateUserToken=(payload)=>{
    const token= jwt.sign({payload}, process.env.SECRET_KEY,{
        expiresIn:"1m"
    });
    
    return token;
}
export const dataFromToken=(token)=>{
    const data= jwt.verify(token, process.env.SECRET_KEY);

    return data;
}