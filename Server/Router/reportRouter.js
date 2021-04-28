import express from 'express';
import reportController from '../Controller/reportController';
import {verifyAuthentication} from "../Middleware/verifyAuthentication"
import validation from "../Middleware/Validator";

const reportRouter= express.Router();
reportRouter.post("/create",verifyAuthentication,validation.verifyRole('school'),reportController.createReport);
reportRouter.post("/mark/update/:id",reportController.updatingMarks);
reportRouter.get("/one/:id", reportController.getOnereport);
reportRouter.get("/all", reportController.getAllReport);
reportRouter.put("/update/:id",verifyAuthentication,validation.verifyRole('school'),reportController.updateReport);
export default reportRouter;