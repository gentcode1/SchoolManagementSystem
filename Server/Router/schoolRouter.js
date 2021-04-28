import express from 'express'
import schoolController from '../Controller/schoolController'

const router=express.Router();

router.post("/school/create",schoolController.schoolInfo);
router.get("/school",schoolController.getAllSchools);
router.get("/school/:id",schoolController.getOneSchool);
export default router;