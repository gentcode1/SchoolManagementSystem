import {check, validationResult} from "express-validator";
import userInfo from "../Model/userModel";

class validator{
 static VerifyAccess= async(req,res,next)=>{
  const userIdFromToken=req.body.userId;
  const idFromParam=req.params.id;
  
  const school= await userInfo.findById(idFromParam);
  if (!blog){
  return Response.errorMessage(res,"does not exist",404)
  }
   else if (userIdFromToken == school.userId._id){
  return next();
  }
  return Response.errorMessage(res,"you are not authorized ",401)
 }
}export default validator