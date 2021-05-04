import StudentController from '../Controller/studentController';
import express from 'express' ;
import {verifyAuthentication} from '../Middleware/verifyAuthentication';
import validation from '../Middleware/Validator';

const studentRoute= express.Router();
studentRoute.post("/student/create",verifyAuthentication,validation.validateStudent(),validation.inputValidation,validation.verifyRole('student'), StudentController.createStudent);
studentRoute.get("/student",verifyAuthentication, StudentController.getAllStudent);
studentRoute.get("/student/:id",verifyAuthentication, StudentController.getStudent);
studentRoute.delete("/student/del/:id",verifyAuthentication,StudentController.deleteOne);
studentRoute.patch("/student/:id",verifyAuthentication,validation.validateStudent(),validation.inputValidation,validation.verifyRole('student'), StudentController.updateStudent);
export default studentRoute;