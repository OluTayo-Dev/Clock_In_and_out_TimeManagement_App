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

const updateStudent = asyncHandler(async (req, res) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true}


        const data = await Student.findByIdAndUpdata(id, updateData, options)
        res.status(201).json({ message: "user updated successsfullly", data})
    } catch (err) {
    res.status(400).json({ success: false, message: err.message})
    }

});

const getStudents = asyncHandler(async (req,res) => {
    const students = await Student.find({})
    res.json(students)
})


const getStudentById = asyncHandler(async (req, res) => {
    const student = await Student.findById(req,params.id)
    if(student) {
        res.json(student)
        console.log(student)
    }else{
        res.status(404)
        .json({ message: "Student not found", error:error.message })
    }
});

const deleteStudent = asyncHandler(async (req, res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id)
        res.status(201).json({ message: "Student successfully deleted", student})
    } catch (err){
        res.status(404)
        .json({ message: "Student not found", error:err.message });
    }
})


export {createStudent, updateStudent, getStudents, getStudentById, deleteStudent};