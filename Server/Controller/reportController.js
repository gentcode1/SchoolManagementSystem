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
    return Response.successMessage(res, "report created successfully", reportData, 200);
  }
  static addLessonReport = async (req, res) => {
    const reportId = req.params.id;
    console.log(reportId)
    const lesson = await reportInfo.findByIdAndUpdate(reportId, {
      $push: {
        report: req.body
      }

    });
    if (!lesson) {
      return Response.errorMessage(res, "no report info provided", 404);
    }
    return Response.successMessage(res, "Lesson Added successfully", lesson, 200);

  }

  static getOnereport = async (req, res) => {
    const reportId = req.params.id;
    const reportData = await reportInfo.findById(reportId);
    if (!reportData) {
      return Response.errorMessage(res, "can not find this report", 404);
    }
    console.log(reportData.report)
    const report = reportData.report;

    let totalMarks = 0;
    report.forEach(element => {
      totalMarks = totalMarks + element.marks[0].test + element.marks[0].exams
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
}
export default reportController;