import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// const passport = require(" ")
import session from "express-session";
import connectDB from "./config/mongoDB.js";
import authRouter from "./routes/authRoutes.js";
import authCategory from "./routes/categoryRoutes.js";
import authProduct from "./routes/productRoute.js";




const app = express();
const PORT =  4001 || process.env.PORT;
connectDB();

app.get('/api/custom', (req, res) => {
  res.json({ message: 'Custom Express API' });
});

app.use(express.json());
app.use('/auth',authRouter)
app.use('/category',authCategory)
app.use('/product',authProduct)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT }`);
});
