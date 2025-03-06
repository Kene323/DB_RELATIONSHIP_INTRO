const router = require("express")
const {createUserDetails, updateDetail} = require("../controller/detailsController")

const detailsRoute = router.Router()

detailsRoute.post("/create-detail", createUserDetails)
detailsRoute.patch("/update-detail/:id", updateDetail)

module.exports = detailsRoute