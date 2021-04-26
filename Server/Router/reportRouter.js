import express from 'express';
import reportController from '../Controller/reportController';
import {verifyAuthentication} from "../Middleware/verifyAuthentication"
import validation from "../Middleware/Validator";

const reportRouter= express.Router();
reportRouter.post("/create",verifyAuthentication,validation.verifyRole('school'),reportController.createReport);
reportRouter.get("/one", reportController.getOnereport);
reportRouter.get("/all", reportController.getAllReport);
reportRouter.put("/update",verifyAuthentication,validation.verifyRole('school'),reportController.updateReport);
export default reportRouter;