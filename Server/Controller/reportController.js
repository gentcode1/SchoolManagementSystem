import reportInfo from '../Model/ReportModel';
import Response from '../Helpers/Response'

class reportController {
  static createReport = async (req, res) => {
    let {
      schoolId,
      studentId,
      report,
      lesson,
      marks,
      test,
      exams,
      totalMarks,
      markspercentage,
      className,
      academicYear,
      gradeRetention
    } = req.body
    /*test = parseInt(req.body.test);
    exams = parseInt(req.body.exams);
    totalMarks = test + exams;
    req.body.totalMarks;*/
    const reportData = await reportInfo.create(req.body);

    
  

    if (!reportData) {
      return Response.errorMessage(res, "no report info provided", 404);
    }
    let result = 0;
    report.forEach(element => {
        
    result = result+ element.marks.test + element.marks.exams
     });
    return Response.successMessage(res, "report created successfully",{reportData,resultTotal:result}, 200);
  }

  
  static addLessonReport = async (req, res) => {
    const reportId = req.params.id;
    
  let addresult = 0;
  let test= req.body.marks.test;
  let exams=req.body.marks.exams;
  let addResult = addresult+ test +exams;
    const reportData = await reportInfo.findByIdAndUpdate(reportId, {
      $push: {
        report: req.body
      }

    });
   console.log(reportData);
    if (!reportData) {
      return Response.errorMessage(res, "no report info provided", 404);
    }
    
    return Response.successMessage(res, "Lesson Added successfully", {reportData,Total:addResult}, 200);

  }

  static getOnereport = async (req, res) => {
    const reportId = req.params.id;
    const reportData = await reportInfo.findById(reportId);
    if (!reportData) {
      return Response.errorMessage(res, "can not find this report", 404);
    }
    
    const report = reportData.report;

    let totalMarks = 0;
  report.forEach(element => {
      
  totalMarks = totalMarks + element.marks.test + element.marks.exams
   });

    return Response.successMessage(res, "get the report successfully", {reportData,Total:totalMarks}, 200);
  }


  static getAllReport = async (req, res) => {
    const reportData = await reportInfo.find();
    if (!reportData) {
      return Response.errorMessage(res, " can not get all reports", 404)
    }
    return Response.successMessage(res, "get all reports successfully", reportData, 200);
  }
  static updateReport = (req, res) => {
    let {
      schoolId,
      studentId,
      report,
      lesson,
      marks,
      test,
      exam,
      totalMarks,
      marksPercentage,
      className,
      academicYear,
      gradeRetention
    } = req.body
    const reportId = req.params.id;
    const reportData = reportInfo.findByIdAndUpdate(reportId, {
      lesson: lesson,
      marks: marks,
      test: est,
      exams: exams,
      totalMarks: totalMarks,
      marksPercentage: marksPercentage,
      gradeRetention: gradeRetention
    });
    if (!reportData) {
      return Response.errorMessage(res, "can not update report data", 404);
    }
    const data = reportInfo.findById(reportId);
    return Response.successMessage(res, "report updated successfully", data, 200);
  }
  static deleteOne= async(req,res)=>{
    const reportId=req.params.id;
    const data= await  reportInfo.findByIdAndDelete(reportId);
    if(!data){
        return Response.errorMessage(res,"this school does not exist",417)
    }
    return Response.successMessage(res," school deleted successfully ",{data},200)
}




}
export default reportController;