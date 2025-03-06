const express = require("express")
require("dotenv/config")
const morgan = require("morgan")
const db = require("./config/db")
const detailroute = require("./route/detailsRoute")
const userroute = require("./route/usersRoute")

const {PORT} = process.env
const port = PORT

const app = express()

db()

app.use(express.json())
app.use(morgan("dev"))
app.use("/api", detailroute)
app.use("/api", userroute)

app.listen(port, () => {
    console.log(new Date().toLocaleString(), port);
})

