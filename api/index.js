import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log("connected to MONGODB");
})
.catch((err)=>{
  console.log(err);
});

const app = express();

app.listen(2000, ()=>{
  console.log("connected to server on port 2000");
})