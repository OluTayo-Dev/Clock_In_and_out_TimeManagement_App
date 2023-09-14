import mongoose from "mongoose";



const clockingSchema = mongoose.Schema({
    student: {
        type: String,
        ref: "Student",
        required:true,
    },

    timestamp:{
        type: Date,
        default: Date.now,
    },

    type: {
        type: String,
        enum: ['In', 'out'],
        required:true,
    }
})

const Clock = mongoose.model("Clock", clockingSchema)

export default Clock;