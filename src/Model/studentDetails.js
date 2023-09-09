import mongoose from "mongoose";




const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },

    phoneNumber:{
        type: String,
        required: true,
        unique: true,
    },
    companyName:{
        type: String,
        required: true,
    },

    programs: {
        type: String,
        required: true
    },

    //programs:[programSchema],

    actions:{
        type: String,
        required: false,
    },

},{
    timestamps: true
})

const Student = mongoose.model("Student", studentSchema);


export default Student;