import express from 'express';
import teacherController from "../Controller/teacherController.js";
const route =express.Router();

route.post("/create",teacherController.createTeacher);
route.get("/create",teacherController. getAll);
route.get("/create/:id",teacherController.getOne);
route.patch("/create/:id",teacherController.updateOne);
export default route;