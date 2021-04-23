import express from 'express';
import  UserAuth from '../Controller/userAuthentication';
import {verifyAuthentication} from '../Middleware/verifyAuthentication';
import validation from '../Middleware/Validator';

const authRouter= express.Router();
authRouter.post("/sign-in", UserAuth.UserAuth.signIn);
authRouter.post("/change/password", verifyAuthentication, UserAuth.UserAuth.changePassword);
export default authRouter;