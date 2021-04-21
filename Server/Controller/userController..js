import userInfo from '../Model/userModel';
import bycrypt from 'bcrypt'
import Response from '../Helpers/Response';

class UserController{

static registerUser=  async(req , res)=>{
    let{
        email,
        password,
        role,
        isActive
    }=req.body
   password= bycrypt.hashSync(password, 15);

const userExist= await userInfo.findOne({email:email});
if(userExist){
return Response.errorMessage(res, "user already exist", 409);
}
req.body.password=password;
const userData= await userInfo.create(req.body);
if(!userData){
    return Response.errorMessage(res, "no user data provided!", 404);
}
return Response.successMessage(res, "create user successfully",userData ,200);
}
static getAllUser=async (req, res)=>{

const allUsers= await userInfo.find();

if (!allUsers){
    return Response.errorMessage(res, "cant get  all users")
}
return Response.successMessage(res, "list of users", allUsers, 200);
}
static getSingleUSer= async (req, res)=>{
    const userId= req.params.id;
    const singleUser= await userInfo.findById(userId);
    if(!singleUser){
  return Response.errorMessage(res, "failed to get a user", 404);
    }
    return Response.successMessage(res, "get user successfully", singleUser, 200);
}
static updateUser= async (req, res)=>{
 const userId= req.params.id;
  let {
    email,
    password,
    role,
    isActive
    
    }= req.body  
 const updateUserData= await userInfo.findByIdAndUpdate(userId, {
    isActive:isActive
 });
 if (!updateUserData){
     return Response.errorMessage(res, "user update  failed", 404);
 }
 const updatedData= await userInfo.findById(userId)
 return Response.successMessage(res, "user updated successfully", updatedData ,200);
}

}    
 export default UserController;