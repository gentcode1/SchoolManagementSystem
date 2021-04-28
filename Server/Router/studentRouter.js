import StudentController from '../Controller/studentController';
import express from 'express' ;
import {verifyAuthentication} from '../Middleware/verifyAuthentication';
import validation from '../Middleware/Validator';

const studentRoute= express.Router();
studentRoute.post("/student/create",verifyAuthentication,validation.validateStudent(),validation.inputValidation,validation.verifyRole('school'), StudentController.createStudent);
studentRoute.get("/student",verifyAuthentication, StudentController.getAllStudent);
studentRoute.get("/student/:id",verifyAuthentication, StudentController.getStudent);
studentRoute.patch("/student/:id",verifyAuthentication,validation.validateStudent(),validation.inputValidation,validation.verifyRole('school'), StudentController.updateStudent);
export default studentRoute;