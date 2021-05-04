import express from 'express'
import schoolController from '../Controller/schoolController'
import {verifyAuthentication} from '../Middleware/verifyAuthentication';
import validation from '../Middleware/Validator';

const router=express.Router();

router.post("/school/create",verifyAuthentication,validation.verifyRole('school'),schoolController.schoolInfo);
router.get("/school",verifyAuthentication,schoolController.getAllSchools);
router.get("/school/:id",verifyAuthentication,schoolController.getOneSchool);
router.delete("/school/delete/:id",verifyAuthentication,schoolController.deleteOne);
router.put('/school/update/:id',verifyAuthentication,schoolController.updateSchool);
router.patch('/school/master/:id',verifyAuthentication,schoolController.addMaster);
export default router;