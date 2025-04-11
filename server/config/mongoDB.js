const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        .then (() => console.log("MongoDB Connected"))
        .catch((err) => console.log("MongoDB Connection Error",err))
    } catch (error) {
        console.log("MongoDB Connection Error",err)
        process.exit(1)
        
    }
}
module.exports  = connectDB;