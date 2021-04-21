import StudentController from '../Controller/studentController';
import express from 'express' ;

const studentRoute= express.Router();
studentRoute.post("/create", StudentController.createStudent);
studentRoute.get("/get/all", StudentController.getAllStudent);
studentRoute.get("/get/one/:id", StudentController.getStudent);
studentRoute.patch("/get/update/:id", StudentController.updateStudent);
export default studentRoute;