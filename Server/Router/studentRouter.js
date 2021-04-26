import StudentController from '../Controller/studentController';
import express from 'express' ;
import {verifyAuthentication} from '../Middleware/verifyAuthentication';
import validation from '../Middleware/Validator';

const studentRoute= express.Router();
studentRoute.post("/create",verifyAuthentication,validation.validateStudent(),validation.inputValidation,validation.verifyRole('school'), StudentController.createStudent);
studentRoute.get("/get/all",verifyAuthentication, StudentController.getAllStudent);
studentRoute.get("/get/one/:id",verifyAuthentication, StudentController.getStudent);
studentRoute.patch("/get/update/:id",verifyAuthentication,validation.validateStudent(),validation.inputValidation,validation.verifyRole('school'), StudentController.updateStudent);
export default studentRoute;