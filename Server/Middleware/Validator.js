import {check, validationResult} from 'express-validator';
import Response from '../Helpers/Response';
import userInfo from '../Model/userModel';

class Validation{
static verifyRole=function (requiredRole){
        return (req, res, next)=>{
            let {role}= req.body.user;
            if(requiredRole!==role){
                return  Response.errorMessage(res, "no access to this router", 401);
            }
          next();
        }

    }
    static validateUser() {
        return[
        check("email", "invalid email").isEmail(),
        check("password","invalid password").isStrongPassword(),
        check("role","invalid role").isIn(["student", "school","teacher","admin"]),
        ]
}
static signInVal() {
    return[
        check("email", "invalid email").isEmail(),
        check("password","invalid password").isStrongPassword(),
    ]
}
static  validateStudent() {
 return[
    check("firstName","invalid first name").isAlpha(),
    check("lastName","invalid last name").isAlpha(),
    check("yearOfStudy", " year of study need to be valid").isNumeric(),
 ]
}
static inputValidation=(req,res, next)=>
{
const errors= validationResult(req);
if(!errors.isEmpty()){
const errormessage= errors.errors.map((e)=>e.msg);
return res.status(400).json({
    status:400,
    error:errormessage,
});
}
return next();
};
}

export default  Validation;


