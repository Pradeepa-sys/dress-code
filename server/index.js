const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const passport = require(" ")
const session = require("express-session")
const connectDB = require("./config/mongoDB.js")




const app = express();
const PORT =  4001;
connectDB();

app.get('/api/custom', (req, res) => {
  res.json({ message: 'Custom Express API' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
