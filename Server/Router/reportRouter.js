import express from 'express';
import reportController from '../Controller/reportController';
import {verifyAuthentication} from "../Middleware/verifyAuthentication"

const reportRouter= express.Router();
reportRouter.post("/create",verifyAuthentication,reportController.createReport);
reportRouter.get("/one", reportController.getOnereport);
reportRouter.get("/all", reportController.getAllReport);
reportRouter.put("/update", reportController.updateReport);
export default reportRouter;