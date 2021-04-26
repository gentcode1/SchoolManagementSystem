import express from 'express'
import schoolController from '../Controller/schoolController'

const router=express.Router();

router.post("/create",schoolController.schoolInfo);
router.get("/all",schoolController.getAllSchools);
router.get("/one/:id",schoolController.getOneSchool);
router.get("/one/:id",schoolController.getOneSchool);
export default router;