import express from "express";
import { Login, Register, getAllUsers } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", Register);
userRouter.post("/login", Login);
userRouter.get("/", getAllUsers);

export default userRouter;
