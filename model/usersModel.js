const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "details"
    }
})

module.exports = mongoose.model("user", userSchema)