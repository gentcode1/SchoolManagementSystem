import express from 'express';
import teacherController from "../Controller/teacherController.js";
const teacherRouter =express.Router();

teacherRouter.post("/teacher/create",teacherController.createTeacher);
teacherRouter.get("/teacher",teacherController. getAll);
teacherRouter.get("/teacher/:id",teacherController.getOne);
teacherRouter.patch("/teacher/:id",teacherController.updateOne);
export default teacherRouter;