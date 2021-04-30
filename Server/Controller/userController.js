import userInfo from '../Model/userModel';
import bycrypt from 'bcrypt'
import Response from '../Helpers/Response';
import EmailHelper from '../Helpers/tempEmail';
import generator from 'generate-password';

class UserController{

static registerUser=  async(req , res)=>{
    let{
        email,
        password,
        role,
        isActive
    }=req.body
    const passwordGenerator= generator.generate({
        length:15,
        numbers:true,
        symbors:true,
        uppercase:true,
        lowercase:true,
        strict:true
      });
    
   
   password= bycrypt.hashSync(passwordGenerator, 15);

const userExist= await userInfo.findOne({email:email});
if(userExist){
return Response.errorMessage(res, "user already exist", 409);
}
req.body.password=password;
const userData= await userInfo.create(req.body);
if(!userData){
    return Response.errorMessage(res, "no user data provided!", 404);
}
else{
    let{password,   ...Data}=userData._doc                               
    await  EmailHelper.userWelcomeEmail(Data,passwordGenerator);
    return Response.successMessage(res, "create user successfully",Data ,200);
}

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