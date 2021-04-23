import express from 'express'
import schoolController from '../Controller/schoolController'
import validator from '../Middleware/Validator'
const router=express.Router();

router.post("/create",schoolController.schoolInfo);
router.get("/all",schoolController.getAllSchools);
router.get("/one/:id",validator.VerifyAccess,schoolController.getOneSchool);
export default router;