import userInfo from '../Model/userModel';
import bycrypt from 'bcrypt'
import Response from '../Helpers/Response'
import {generateUserToken} from '../Helpers/Token'

class UserAuth{
    static changePassword= async (req, res)=>{
        let{
            oldPassword,
            newPassword,
            confirmPassword
        }=req.body;
    const userId = req.body.userId;
    const details= await userInfo.findById(userId);
    const userExistPassword= bycrypt.compareSync(oldPassword, details.password)
    if(userExistPassword){
        if(newPassword===confirmPassword){
       password= bycrypt.hashSync(newPassword, 15);
       
       const passwordChangedTime= Date.now();
       const updatePassword= await userInfo.findByIdAndUpdate(userId,{
        password:password,
        passwordChangedTime:passwordChangedTime
       });
        return Response.successMessage(res, "new password updated successfully", updatePassword, 200);
        }
      return Response.errorMessage(res, "failed to update password",417);
    }

    }

    
    static signIn= async (req,res)=>{
        let{
            email,
            password
            
        }=req.body
    
    const userData= await userInfo.findOne({email:email});
  
    if (!userData){

        return Response.errorMessage(res, "log in failed", 401);
       
    }
    const existPassword= bycrypt.compareSync(password, userData.password);
    
        if(existPassword){
        const data=  userData
    
        const token = generateUserToken({
         email:data.email,
         id: data.id,
         role: data.role,
         isActive: data.isActive,
         passwordChangedTime:data.passwordChangedTime
        });
    
        return Response.successMessage(res, "log in successfully", {token}, 200);
}

       return Response.errorMessage(res,"password is incorect", 401);
}

}
export default {UserAuth};