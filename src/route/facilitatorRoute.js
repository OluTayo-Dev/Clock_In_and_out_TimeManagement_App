import express from "express";
import {addFacilitator} from "../Controller/facilitatorInfo.js";




const router = express.Router()
router.post("/addFacilitator", addFacilitator)


export default router;