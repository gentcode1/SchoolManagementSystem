import teacherInfo from "../Model/teacherModel.js";

class teacherController{
static createTeacher=async(req,res)=>{
       
    let{
        names ,
        phone,
        role,

    }=req.body;

    const teacher =await teacherInfo.create(req.body);
    if(!teacher){
        return res.status(417).json({
            status:417,
            message:" Blog failed",
            
        })
    }
    return res.status(201).json({
        status:201,
        message:"blog created successfully",
        teacher
    })    
};
//get all
static getAll= async (req,res)=>{
    const data =await teacherInfo.find();

    return res.status(200).json({
        status:200,
        message:"all",
        data:data
    })
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
    return res.status(200).json({
        status:200,
        message:"This is one Blog",
        data
    })
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
    return res.status(407).json({
        status:407,
        message:" no post",
        data
    })
    //return Response.errorMessage(res,"couldnt update",404)
}
const dataUpated= await teacherInfo.findById(id)
return res.status(200).json({
    status:200,
    message:"successfully update ",
    dataUpated
    
})
// return Response.successMessage(res,"successfully update",dataUpated,200)
}

}
export default teacherController;