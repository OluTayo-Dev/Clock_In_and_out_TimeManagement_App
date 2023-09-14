import asyncHandler from "express-async-handler";
import Clock from "../Model/clockInOut.js";
import Student from "../Model/studentDetails.js";




const clockIn = asyncHandler(async (req, res) => {
    try{
        const {student_id} = req.body;

        // Check if the provided student _id exists in the Student collection
        const existingStudent = await Student.findById(student_id);
        if(!existingStudent) {
            return res.status(400).json({ message: "Employee not found"});
        }
        // Check if the student has already clocked in today
        const existingClockIn = await Clock.findOne({
            student: student_id,
            timestamp: {
                $gte: new Date(new Date().setHours(0, 0, 0, 0)),
            },

        });

        if(existingClockIn) {
            return res
            .status(400)
            .json({ message: "student has already clocked in for today"})
        }


        // Create a new Clocking detail to record the clock-in-time
        const newClockIn = await Clock.create({
            student: student_id,
            type: 'in', // Assuming this is a clock-in
        });
        res.status(201).json({ message: 'Clock-in successful', clockIn: newClockIn});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "~Failed to clock in", error: error.message})
    }
});

const clockOut = asyncHandler(async (req, res) => {
    try{
        const {student_id} = req.body;

        //Check if the provided student_id exists in the Student collection
        const existingStudent = await Student.findById(student_id);
        if(!existingStudent) {
            return res
            .status(400).json({ message: "Student not found"})
        }

        //Find the last clock-in entry for the student for today
        const lastClockIn = await Clock.findOne({
            student: student_id,
            timestamp:{
                $gte: new Date(new Date().setHours(0, 0, 0, 0)),
            },
            type: 'in', // Assuming 'in' is for clock-in and 'out' is for clock-out
        }).sort({ timestamp: -1 }) // Sort is for clock-in descending order to get the latest entry

        if(!lastClockIn) {
            return res.status(400).json({ message: "Student has not clocked in today"})
        }

        //Update the last clock-in entry to record  the clock-out time
        lastClockIn.type = 'out',
        lastClockIn.timestamp = new Date();
        await lastClockIn.save();

        res.status(200).json({
            message: "Clock-out successful",
            clockOutTime: lastClockIn.timestamp,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to clock-out", error: error.message})
    }
})

export {clockIn, clockOut}