import express from 'express'
import lessonController from '../Controller/lessonController';
import validator from '../Middleware/Validator';
import verifyAuth from "../Middleware/authVerification";

const lessonRouter=express.Router();
lessonRouter.post("/create/lesson",verifyAuth,validator.verifyRole('school'),lessonController.createLesson);
lessonRouter.get("/all",validator.verifyRole('teacher'),lessonController.getAllLessons);
lessonRouter.get("/one/:id",lessonController.getOneLesson);
lessonRouter.patch("/one/:id",lessonController.updateLesson);

export default lessonRouter