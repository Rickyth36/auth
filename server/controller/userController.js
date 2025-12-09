import userModel from "../models/userModel";

export const getuserData = async(req,res) => {
    try {
        const userId = req.userId;
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}