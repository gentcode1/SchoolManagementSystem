import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import ClassRouter from "./Server/Router/classRouter.js";

import route from "./Server/Router/teacherRouter.js";

import router from "./Server/Router/schoolRouter"
import lessonRouter from "./Server/Router/lessonRouter"

import userRouter from './Server/Router/userRouter';
import authRouter from './Server/Router/userAuthRoute';
import studentRoute  from './Server/Router/studentRouter';


const app = express();
dotenv.config({ path: "./.env" });


app.use(bodyparser.json());

app.use('/api/v1/class', ClassRouter);
app.use('/api/v1/teacher', route);

app.use('/api/v1/school',router)

app.use("/api/v1/user", userRouter);

app.use("/api/v1/lesson",lessonRouter)

app.use("/api/v1/user/auth", authRouter);
app.use("/api/v1/student", studentRoute);



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
  