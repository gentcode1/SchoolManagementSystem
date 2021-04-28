import express from 'express';
import classController from "../Controller/classController.js"
const router =express.Router();

router.post("/class/create",classController.createClass);
router.get("/class",classController.getAllClass);
router.get("/class/:id",classController.getOneClass);
router.patch("/class/:id",classController.updateOneclass);
// router.delete("/class/:id",classController.updateOneclass);

export default router;
