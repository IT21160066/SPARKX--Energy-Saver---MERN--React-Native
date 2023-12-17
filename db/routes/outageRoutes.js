import express from "express";
import { add,getAll } from "../controllers/outageController";

const outageRouter = express.Router()

outageRouter.post("/add", add);
outageRouter.get("/", getAll);

export default outageRouter;
