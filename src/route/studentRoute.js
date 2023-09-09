import express from "express";
import { createStudent } from "../Controller/studentInfo.js";




const router = express.Router()
router.post("/createStudent", createStudent)


export default router;