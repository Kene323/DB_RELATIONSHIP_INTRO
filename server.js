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

app.all("/", (req, res) => {
    return res.status(200).json({message: "API is up and running"})
})

app.all("*", (req, res) => {
    return res.status(404).json({message: "The route does not exist"})
})

app.listen(port, () => {
    console.log(new Date().toLocaleString(), port);
})

