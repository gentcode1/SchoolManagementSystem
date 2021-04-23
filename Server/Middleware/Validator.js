import {check, validationResult} from 'express-validator';

class Validation{
    static validateUser() {
        return[
        check("email", "invalid email").isEmail(),
        check("password","invalid password").isStrongPassword(),
        check("role","invalid role").isIn(["student", "school","teacher"]),
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