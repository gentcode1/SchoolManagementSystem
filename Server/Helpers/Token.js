import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config({path:"../../.env"});
export const generateUserToken=(payload)=>{
    const token= jwt.sign({payload}, process.env.SECRET_KEY,{expiresIn:"1d"});
    
    return token;
}
export const dataFromToken=(token)=>{
    const data= jwt.verify(token, process.env.SECRET_KEY);

    return data;
}
export const RefleshToken=(payload)=>{
    
const refreshtoken= jwt.sign({payload}, process.env.REFRESH_SECRET_KEY,{});
return refreshtoken; 
}