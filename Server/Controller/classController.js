import  classModelInfo from "../Model/classModel.js";
class classController{
    static createClass=async(req,res)=>{
           
        let{
        className,
        yearPromotion,
        levelType
          
    
        }=req.body;
        
    
        const data =await classModelInfo.create(req.body);
        if(!data){
            return res.status(417).json({
                status:417,
                message:"fail to create",
               
            })
        }
        return res.status(201).json({
            status:201,
            message:"class created successfully",
            data
        })    
    };
    
//get all class

static getAllClass= async (req,res)=>{
    const data =await classModelInfo.find();

    return res.status(200).json({
        status:200,
        message:"all",
        data:data
    })
};
    //get one class by Id

    static getOneClass=async(req,res)=>{
        const classId=req.params.id;
        const data= await classModelInfo.findById(classId);
        
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
static updateOneclass=async (req,res)=>{
    const id=req.params.id
    let{ 
        className,
        yearPromotion,
        leveType
       
          
    }=req.body
    const data=await classModelInfo.findByIdAndUpdate(id,req.body)
    if(!data){
        return res.status(407).json({
            status:407,
            message:" no post",
            data
        })
        //return Response.errorMessage(res,"couldnt update",404)
    }
    const dataUpated= await classModelInfo.findById(id)
    return res.status(200).json({
        status:200,
        message:"successfully update ",
        dataUpated
        
    })
   // return Response.successMessage(res,"successfully update",dataUpated,200)
}
    
    }
    export default classController;