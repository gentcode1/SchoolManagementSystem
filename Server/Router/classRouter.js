import express from 'express';
import classController from "../Controller/classController.js"
const router =express.Router();

router.post("/create",classController.createClass);
router.get("/create",classController.getAllClass);
router.get("/create/:id",classController.getOneClass);
router.patch("/create/:id",classController.updateOneclass);

export default router;
