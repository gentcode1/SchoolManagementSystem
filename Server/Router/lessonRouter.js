import express from 'express'
import lessonController from '../Controller/lessonController';


const lessonRouter=express.Router();
lessonRouter.post("/lesson/create",lessonController.createLesson);
lessonRouter.get("/lesson",lessonController.getAllLessons);
lessonRouter.get("/lesson/:id",lessonController.getOneLesson);
lessonRouter.patch("/lesson/:id",lessonController.updateLesson);

export default lessonRouter