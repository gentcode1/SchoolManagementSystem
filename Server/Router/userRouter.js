import express from "express";
import userController from "../Controller/userController";
import validation from '../Middleware/Validator';
import {verifyAuthentication} from "../Middleware/verifyAuthentication";

const userRouter= express.Router()
userRouter.post("/user/create/school",verifyAuthentication,validation.validateUser(),validation.inputValidation,validation.verifyRole('admin'), userController.registerUser);
userRouter.post("/user/create/student",verifyAuthentication,validation.validateUser(),validation.inputValidation,validation.verifyRole('school'), userController.registerUser)
userRouter.get("/user", verifyAuthentication,userController.getAllUser);
userRouter.get("/user/:id",verifyAuthentication, userController.getSingleUSer);
userRouter.delete("/user/:id",verifyAuthentication, userController.deleteOne);
userRouter.patch("/user/:id" ,verifyAuthentication,validation.validateUser(),validation.inputValidation,  userController.updateUser);
export default userRouter;