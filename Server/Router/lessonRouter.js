import express, { Router } from 'express'
import lessonController from '../Controller/lessonController';

const lessonRouter=express.Router();
lessonRouter.post("/createLesson",lessonController.createLesson);
lessonRouter.get("/all",lessonController.getAllLessons);
lessonRouter.get("/one/:id",lessonController.getOneLesson);
lessonRouter.patch("/one/:id",lessonController.updateLesson);

export default lessonRouter