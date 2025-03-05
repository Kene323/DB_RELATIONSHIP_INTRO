const userModel = require("../model/usersModel")

const createUser = async (req, res) => {
    try {
        const {name, email} = req.body
        const checkUserExist = await userModel.findOne({email})

        if(checkUserExist) {
            res.status(409).json({message: "User already exists"})
        } 

        const newUser = await userModel.create({
            name,
            email
        })
        res.status(200).json({message: "User created Successfully"})
    } catch (error) {
        return res.status(500).json({message: "An error occured", error: error?.message})
    }
}

const getAllUser = async (req, res) => {
    try {
        const getAll = await userModel.find()
        res.status(200).json({message: "User Retrieved", DATA: getAll})
    } catch (error) {
        return res.status(500).json({message: "An error occured", error: error || error?.message})
    }
}

const getUser = async (req, res) => {
    try {
        const {userId} = req.params
        const getUser = await userModel.findById(userId).populate("details")

        if(!getUser){
            return res.status(409).json({message: "User not found"})
        }

        res.status(200).json({message: "User Retrieved", DATA: getUser})
    } catch (error) {
        return res.status(500).json({message: "An error occured", error: error || error?.message})
    }
}

module.exports = {createUser, getUser, getAllUser}