import mongoose from "mongoose";



const classSchema = mongoose.Schema({
   facilitator:{
    type: String,
    required: true,
   },

   addStudent:{
    type: String
    required: true,
   },
   date:{
    type:String,
    required: true,
   },
   sectionTime:{
    type: String,
    required: true,
   },
   addSection: {
    type: String,
    required: true
   },
   user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Program" 
   }

},{
    timestamps: true
})

const Class = mongoose.model("Class", classSchema)


export default Class;