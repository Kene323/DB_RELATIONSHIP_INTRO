const express = require("express")
const {createUser, getUser, getAllUser} = require("../controller/userController")


const userRoute = express.Router()

userRoute.post("/create-user", createUser)
userRoute.get("/get-user/:userId", getUser)
userRoute.get("/get-all-users", getAllUser)


module.exports = userRoute