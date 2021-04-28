import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import ClassRouter from "./Server/Router/classRouter.js";

import teacherRouter from "./Server/Router/teacherRouter.js";

import schoolRouter from "./Server/Router/schoolRouter"
import lessonRouter from "./Server/Router/lessonRouter"

import userRouter from './Server/Router/userRouter';
import authRouter from './Server/Router/userAuthRoute';
import studentRouter  from './Server/Router/studentRouter';
import reportRouter from "./Server/Router/reportRouter";


const app = express();
dotenv.config({ path: "./.env" });


app.use(bodyparser.json());

app.use('/api/v1/shool-managment', ClassRouter);
app.use('/api/v1/shool-managment', teacherRouter);
app.use('/api/v1/shool-managment', reportRouter);

app.use('/api/v1/shool-managment',schoolRouter)

app.use("/api/v1/shool-managment", userRouter);

app.use("/api/v1/shool-managment",lessonRouter)

app.use("/api/v1/shool-managment", authRouter);
app.use("/api/v1/shool-managment", studentRouter);



app.use("/", (req, res) => {
   
   res.status(200).send({ status: 200, message: "this router is not exist" });
  });
  const database_url = process.env.DATABASE;
  mongoose
    .connect(database_url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify:false
    })
    .then(() => 
      console.log("Database connected successfully !"));
  
  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
  export default app;
  