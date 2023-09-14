import express from "express";
import {clockIn, clockOut} from "../Controller/clockInOutInfo.js";


const router = express.Router()
router.post("/clockIn", clockIn)
router.post("/clockOut", clockOut)


export default router;