import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./Server/Router/classRouter.js";

import route from "./Server/Router/teacherRouter.js";

const app = express();
dotenv.config({ path: "./.env" });
app.use(bodyparser.json());
app.use('/api/v1/class', router);
app.use('/api/v1/teacher', route);
app.use("/", (req, res) => {
  return res.status(201).json({
    status:201,
    message:"this router is not exist",
    
}) 
   // res.status(200).send({ status: 200, message: "this router is not exist" });
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
  