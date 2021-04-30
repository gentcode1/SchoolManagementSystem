import express from 'express';
import reportController from '../Controller/reportController';
import {verifyAuthentication} from "../Middleware/verifyAuthentication"
import validation from "../Middleware/Validator";

const reportRouter= express.Router();
reportRouter.post("/report/create",reportController.createReport);

//reportRouter.post("/report/create",verifyAuthentication,validation.verifyRole('school'),reportController.createReport);
reportRouter.get("/report/:id", reportController.getOnereport);
reportRouter.get("/report", reportController.getAllReport);
reportRouter.post("/report/add-lesson/:id", reportController.addLessonReport);
reportRouter.put("/report/:id",verifyAuthentication,validation.verifyRole('school'),reportController.updateReport);
export default reportRouter;