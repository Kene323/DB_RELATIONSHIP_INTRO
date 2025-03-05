const router = require("express")
const {createUserDetails} = require("../controller/detailsController")

const detailsRoute = router.Router()

detailsRoute.post("/create-detail", createUserDetails)

module.exports = detailsRoute