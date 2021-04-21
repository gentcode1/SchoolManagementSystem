import express from "express";
import userController from "../Controller/userController.";

const userRouter= express.Router()
userRouter.post("/register", userController.registerUser);
userRouter.get("/all", userController.getAllUser);
userRouter.get("/one/:id", userController.getSingleUSer);
userRouter.patch("/update/:id" , userController.updateUser);
export default userRouter;