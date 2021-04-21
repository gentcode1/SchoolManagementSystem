import teacherInfo from "../Model/teacherModel.js";
import Response from "../Helpers/Response.js";

class teacherController{
static createTeacher=async(req,res)=>{
       
    let{
        names ,
        phone,
        role,

    }=req.body;

    const teacher =await teacherInfo.create(req.body);
    if(!teacher){
      
        return Response.errorMessage(res,"problem with creating the account",417)
    }
     
    return Response.successMessage(res,"created successfully",teacher,200)
};
//get all
static getAll= async (req,res)=>{
    const data =await teacherInfo.find();

  
    return Response.successMessage(res,"get all",data,200)
};

//get one class by Id

static getOne=async(req,res)=>{
    const teacherId=req.params.id;
    const data= await teacherInfo.findById(teacherId);
    
    if(!data){
        return res.status(407).json({
            status:407,
            message:" no post",
            data
        })
    }
    
    return Response.successMessage(res," one teacher",data,200)
}

//update
static updateOne=async (req,res)=>{
const id=req.params.id
let{ 
    names ,
    phone,
    role,

      
}=req.body
const data=await teacherInfo.findByIdAndUpdate(id,req.body)
if(!data){
    
    return Response.errorMessage(res,"couldn't update",404)
}
const dataUpated= await teacherInfo.findById(id)

return Response.successMessage(res,"successfully update",dataUpated,200)
}

}
export default teacherController;