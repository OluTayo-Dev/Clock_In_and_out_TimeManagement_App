import asyncHandler from "express-async-handler";
import Facilitator from "../Model/facilitatorDetails.js";


const addFacilitator = asyncHandler(async (req, res) => {
    const {facilitatorsName, description, email, phoneNumber, address, actions} = req.body;
    try{
        await Facilitator.create({ facilitatorsName,description, email, phoneNumber, address, actions}).then(
            (facilitator => {
                 res.status(201).json({ message: "facilitator added successfully", facilitator})
            })
        )
    } catch (err) { 
        res.status(400).json({ message: "failed to add facilitator", error:err.message})
    }
})

export {addFacilitator} 


