import express from "express";
import userController from "../Controller/userController";
import validation from '../Middleware/Validator'

const userRouter= express.Router()
userRouter.post("/register",validation.validateUser(),validation.inputValidation, userController.registerUser);
userRouter.get("/all", userController.getAllUser);
userRouter.get("/one/:id", userController.getSingleUSer);
userRouter.patch("/update/:id" ,validation.validateUser(),validation.inputValidation,  userController.updateUser);
export default userRouter;