import {dataFromToken} from '../Helpers/Token';
import UserController from '../Controller/userController..js';
import Response from '../Helpers/Response';
export const verifyAuth=async (req,res,next)=>{
    const token= req.header("x-auth-token");

    if(token){
        return Response(res,"no token provided",404)
    }
 try{
    const user= dataFromToken(token).payload;
    const users=UserController;
    const data= await users.findById(user.id)
    if(!data){
        return Response.errorMessage(res,"you are not a user",404)
    }
    req.body.userId=user.id
    return next()
    
 }
 catch (error){
    return Response.errorMessage(res,"invalid token",404)
 }
}