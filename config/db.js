const mongoose = require("mongoose")

const {MONGODB_URL} = process.env

const db = async () => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log(`Connected to database`);
    } catch(error) {
        console.log(`Couldn't connect to the database`, error);
    }
}

module.exports = db