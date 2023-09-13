import asyncHandler from "express-async-handler";
import Program from "../Model/programDetails.js";




const createProgram = asyncHandler(async (req, res) => {
    const {user, programTitle, description, students, classSchedule, actions} = req.body;
    try{
        await Program.create({ user, programTitle, description, students, classSchedule, actions}).then(
            (program) => {
                res.status(201).json({ message: "Program created successfully", program})
            }
        )
    } catch (err) {
        res.status(400).json({ message: "Failed to create Program", error:err.message})
    }


})

const updateProgram = asyncHandler(async (req, res) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true }


        const data = await Program.findByIdAndUpdate(id, updateData, options)
        res.status(201).json({ message: "Program added successfully", data})
    } catch (err) {
        res.status(400).json({ success: false, message:err.message})
    }

});




export {createProgram, updateProgram}