import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import userRouter from "./routes/userRoutes.js";
import * as dotenv from 'dotenv' 
import outageRouter from "./routes/outageRoutes.js";
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());


app.use("/user",userRouter);
app.use("/outage",outageRouter) //outage Routes

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL)
.then(() => app.listen(5000))
.then(() => console.log("Database is Connected"))
.catch((err) => console.log(err));
