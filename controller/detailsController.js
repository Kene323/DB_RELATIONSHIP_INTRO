const detailsModel = require("../model/detailsModel")
const userModel = require("../model/usersModel")

// CREATE DETAILS
const createUserDetails = async (req, res) => {
    try {
        const {userId, age, address} = req.body
        const getUser = await userModel.findById(userId)

        if(!userId) {
            return res.status(404).json({message: "You don't have an account, please sign up"})
        }

        const createDetails = new detailsModel({
            age,
            address,
            user: getUser._id
        })

        createDetails.save()
        getUser.details = createDetails._id
        await getUser.save()

        res.status(200).json({message: "user details created", data: createDetails})
    } catch (error) {
        return res.status(500).json({message: "An error occured", error: error?.message})
    }
}

// UPDATE DETAILS
const updateDetail = async (req, res) => {
    try {
        const {age, address, userId} = req.body

        const update = await detailsModel.findByIdAndUpdate(
            req.params.id,{
                age,
                address,
                userId
        },
        {
            new: true
        })

        if(!update) {
           return res.status(404).json({message: "Details not found"})
        } 
       return res.status(200).json({message: "Details updated successfully", data: update})
    } catch (error) {
        return res.status(500).json({message: "An error occured", error: error?.message})
    }
}
module.exports = {createUserDetails, updateDetail}