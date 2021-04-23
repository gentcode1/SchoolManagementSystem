import Response from '../Helpers/Response';
import {dataFromToken} from '../Helpers/Token';
import userInfo from '../Model/userModel';


export const verifyAuthentication= async (req, res, next)=>{
const token= req.header("x-auth-Token");
if(!token){
 return Response.errorMessage(res, "please provide Token", 404);
}
try{
const user= dataFromToken(token).payload;
const data= userInfo.findById(user.id);
 req.body.userId= user.id
if (!data){
    return Response.errorMessage(res, "can't find user data!", 404);
}
if(data.passwordChangedTime!=user.passwordChangedTime){
    return Response.errorMessage(res, "please re_login  your passwords is not match", 404);
}
return next();
} 
catch(e){
    return Response.errorMessage(res, "invalid token", 404);
}
}
