import  classModelInfo from "../Model/classModel.js";
import Response from "../Helpers/Response.js";
class classController{
    static createClass=async(req,res)=>{
           
        let{
        className,
        yearPromotion,
        levelType
          
    
        }=req.body;
        
    
        const data =await classModelInfo.create(req.body);
        if(!data){
           
            return Response.errorMessage(res,"fail to create",417)
        }
        
        return Response.successMessage(res,"successfully created",data,200)   
    };
    
//get all class

static getAllClass= async (req,res)=>{
    const data =await classModelInfo.find();

    
    
    return Response.successMessage(res,"get all classes",data,200) 
};
    //get one class by Id

    static getOneClass=async(req,res)=>{
        const classId=req.params.id;
        const data= await classModelInfo.findById(classId);
        
        if(!data){
            
            return Response.errorMessage(res,"can not create lesson",417)
        }
        
        return Response.successMessage(res,"one class",data,200)
    }

//update
static updateOneclass=async (req,res)=>{
    const id=req.params.id
    let{ 
        className,
        yearPromotion,
        leveType
       
          
    }=req.body
    const data=await classModelInfo.findByIdAndUpdate(id,req.body)
    if(!data){
        
        return Response.errorMessage(res,"couldnt update",404)
    }
    const dataUpated= await classModelInfo.findById(id)
    
   return Response.successMessage(res,"successfully update",dataUpated,200)
}
    
    }
    export default classController;