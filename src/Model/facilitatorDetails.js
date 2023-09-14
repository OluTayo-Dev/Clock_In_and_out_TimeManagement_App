import mongoose from "mongoose";






const facilitatorSchema = mongoose.Schema({
  facilitatorsName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },


  phoneNumber: {
    type: String,
    required: true,
  },


  address:{
    type: String,
    required: true,
  },

  actions: {
    type: String,
    required: true,
  }

},{
    timestamps: true
});

const Facilitator = mongoose.model("Facilitator", facilitatorSchema);


export default Facilitator;