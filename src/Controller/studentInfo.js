import asyncHandler from "express-async-handler";
import Student from "../Model/studentDetails.js";



const createStudent = asyncHandler(async (req, res) => {
    const {name, email,phoneNumber, companyName, programs, actions } = req.body;

    const studentExists = await Student.findOne({ email })

    if( studentExists) {
        res.status(400)
        .json({ message: "Student details already exists"})
    }

    const student = await Student.create({
        name,
        email,
        phoneNumber,
        companyName,
        programs,
        actions,
    })

    if(student) {
        res.status(201).json({ message: "Student details created successfully", student,
        _id: student._id,
        name: student.name,
        email: student.email,
     });

    }else{
        res.status(400)
        .json({ message: "Invalid student data", error: err.message })
    }
});
export {createStudent};