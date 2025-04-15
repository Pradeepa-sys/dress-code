import { connect } from "mongoose";
import { config } from "dotenv";

config();

const connectDB = async() => {
    try {
        await connect(process.env.MONGODB_URI)
        .then (() => console.log("MongoDB Connected"))
        .catch((err) => console.log("MongoDB Connection Error",err))
    } catch (error) {
        console.log("MongoDB Connection Error",err)
        process.exit(1)
        
    }
}
export default connectDB;