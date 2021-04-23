import studentInfo from '../Model/studentModel';
import Response from '../Helpers/Response';

class StudentController{
 static createStudent= async (req, res)=>{
     let{
        
         firtName,
         lastName,
         address,
         guardian,
         yearOfStudy,
         
     }= req.body
 
    const studentData= await studentInfo.create(req.body);
    
    if(!studentData){
    return Response.errorMessage(res, "no student info provided" ,404);
    }
    return Response.successMessage(res, "student created successfully", studentData, 200);
    
 }

 static getAllStudent= async(req,res)=>{
    const studentData= await studentInfo.find();
    if(!studentData){
    return Response.errorMessage(res, "failed to get all student", 404);
    }
    return Response.successMessage(res, " list of all student", studentData, 200);
 }
 static getStudent= async (req, res)=>{
     const studentId= req.params.id;
     const studentData= await studentInfo.findById(studentId);
     if(!studentData){
     return Response.errorMessage(res, "failed to get this student", 404)
     }
    return Response.successMessage(res, "get student info successfully", studentData,200);
 }
 static updateStudent= async (req, res)=>{
      const studentId= req.params.id;
      let{
        email,
        firtName,
        lastName,
        address,
        guardian,
        yearOfStudy
      }= req.body
      const studentData= await studentInfo.findByIdAndUpdate(studentId,{
        email:email,
        address:address,
        guardian:guardian,
        yearOfStudy:yearOfStudy     
     });
    if(!studentData){
        return Response.errorMessage(res, "updating student failed", 404);
    }
    const studentUpdateData= await studentInfo.findById(studentId)
    return Response.successMessage(res, "student info updated successfully", studentUpdateData, 200);
 }

}

export default StudentController;
