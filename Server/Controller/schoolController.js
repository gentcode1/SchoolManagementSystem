import schoolData from '../Model/schoolModel';
import Response from '../Helpers/Response'
class schoolContoller{
    static schoolInfo=async (req,res)=>{
        let{
            schoolName,
            address,
            phone,
            motor,
            logo,
            website,
            headmaster,
            userId
        }=req.body;
        
        const schoolDeatils= await schoolData.create(req.body);
        if (!schoolDeatils){
            return Response.errorMessage(res,"problem with creating the account",417)
        }
        return Response.successMessage(res,"created successfully",schoolDeatils,200)
    }
    static getAllSchools=async (req,res)=>{
        const data=await schoolData.find();
        if(!data){
            return Response.errorMessage(res,"couldn't fetch all schools")
        }
        return Response.successMessage(res,"all schools",{data},200)
    }
    static getOneSchool= async (req,res)=>{
        const id=req.params.id
        const data=await schoolData.findById(id);

        if(!data){
            return Response.errorMessage(res,"this school doesnt exist",417)
        }
        return Response.successMessage(res,"successfully school submission",{data},200)
    }

    static deleteOne= async(req,res)=>{
        const schoolId=req.params.id;
        const data= await  schoolData.findByIdAndDelete(schoolId);
        if(!data){
            return Response.errorMessage(res,"this school does not exist",417)
        }
        return Response.successMessage(res," school deleted successfully ",{data},200)
    }
    static addMaster= async(req,res)=>{
      const schoolId=req.params.id;
      const master= await schoolData.findByIdAndUpdate(schoolId,{ 
        $push :{
            headmaster:req.body
  }
});
   
    if(!master){
        return Response.errorMessage(res,"no update data yet", 404);
    }
    
    return Response.successMessage(res,"headmaster updated successfully", master, 200);
    }
    static updateSchool= async(req, res)=>{
        const schoolId=req.params.id;
        const data= await schoolData.findByIdAndUpdate(schoolId,{
            schoolName:schoolName,
            address:address,
            phone:phone,
            motor:motor,
            logo:logo,
            website:website,
         });
        if(!data){
            return Response.errorMessage(res,"can not find data to be updated", 404);
        }
        const updatedData= await schoolData.findById(schoolId);
        return Response.successMessage(res,"update school successfully", updatedData,200);
}
    
}
export default schoolContoller;