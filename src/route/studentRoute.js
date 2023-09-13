import express from "express";
import { createStudent, updateStudent, getStudents, getStudentById, deleteStudent } from "../Controller/studentInfo.js";




const router = express.Router()
router.post("/createStudent", createStudent)
router.route("/updateStudent/:id").put(updateStudent)
router.route("/getStudents").get(getStudents)
router.route("/getStudentById").get(getStudentById)
router.route("/deleteStudent/:id").delete(deleteStudent)


export default router;