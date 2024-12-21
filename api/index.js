import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log("connected to MONGODB");
})
.catch((err)=>{
  console.log(err);
});

const app = express();
app.use(express.json());

app.listen(4000, ()=>{
  console.log("connected to server on port 4000");
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)