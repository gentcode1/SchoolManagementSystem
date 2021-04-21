import express from 'express';
import  UserAuth from '../Controller/userAuthentication'

const authRouter= express.Router();
authRouter.post("/sign-in", UserAuth.UserAuth.signIn);
export default authRouter;