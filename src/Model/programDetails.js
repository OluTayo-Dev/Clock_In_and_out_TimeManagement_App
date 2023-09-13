import mongoose from "mongoose";



const programSchema = mongoose.Schema({
    

     user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref : 'Student' //relation betwen the program and the student
    },
    programTitle:{
        type: String,
        required: true,
   
    },
    description:{
        type: String,
        required: true,
    },
    students:{
        type: Number,
        required: true,
    },
    classSchedule:{
        type: String,
        required: true,
    },
    actions:{
        type: String,
        required: true
    },

},{
    timestamps: true
})

const Program = mongoose.model("Program", programSchema);


export default Program;