import express from "express";
import { createProgram } from "../Controller/programInfo.js";




const router = express.Router()
router.post("/createProgram", createProgram)


export default router;
