import {check, validationResult} from "express-validator";
import userInfo from "../Model/userModel";
import Response from "../Helpers/Response"

class validator{
 static VerifyAccess= async(req,res,next)=>{
  const userIdFromToken=req.body.userId;
  // const idFromParam=req.params.id;
  
  const school= await userInfo.findById(userIdFromToken);
  console.log(school)
  
  if (!school){
  return Response.errorMessage(res,"does not exist",404)
  }
   else if (userIdFromToken == school._id){
    req.body.user=school
  return next();
  }
  return Response.errorMessage(res,"you are not authorized ",401)
 }
 
}export default validator