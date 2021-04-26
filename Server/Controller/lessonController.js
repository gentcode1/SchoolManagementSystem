import lessonData from '../Model/lessonModel';
import Response from '../Helpers/Response';

class lessonController{

    static createLesson= async(req,res)=>{
        let{
            lessonName,
            lessonCode,
            levelType

        }=req.body
        const lessonDetails= await lessonData.create(req.body);

        if(!lessonDetails){
            return Response.errorMessage(res,"can not create lesson",417)
        }
        return Response.successMessage(res,"successfully created",lessonDetails,200)
    }
    static getAllLessons= async(req,res)=>{
        const data= await lessonData.find();
        if(!data){
            return Response.errorMessage(res,"can not find lesson",417)
        }
        return Response.successMessage(res,"total number of lessons",data,200)
    }
    static getOneLesson= async (req,res)=>{
        const id=req.params.id
        const data=await lessonData.findById(id)

        if(!data){
            return Response.errorMessage(res,"couldnt find lesson",417)
        }
        return Response.successMessage(res,"success lesson",data,200)
    }
    static updateLesson=async (req,res)=>{
        const id=req.params.id
        let{lessonName,
            lessonCode,
            levelType
        }=req.body
        const data=await lessonData.findByIdAndUpdate(id,req.body)
        if(!data){
            return Response.errorMessage(res,"couldnt update",404)
        }
        const dataUpated= await lessonData.findById(id)
        return Response.successMessage(res,"successfully update",dataUpated,200)
        
    }


}
export default lessonController