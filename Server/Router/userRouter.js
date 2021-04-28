import express from "express";
import userController from "../Controller/userController";
import validation from '../Middleware/Validator'

const userRouter= express.Router()
userRouter.post("/user/create",validation.validateUser(),validation.inputValidation, userController.registerUser);
userRouter.get("/user", userController.getAllUser);
userRouter.get("/user/:id", userController.getSingleUSer);
userRouter.patch("/user/:id" ,validation.validateUser(),validation.inputValidation,  userController.updateUser);
export default userRouter;