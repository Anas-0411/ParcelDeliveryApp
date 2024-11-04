const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Database Connection
const DB = process.env.DB;
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("DB Disconnected");
  });

module.exports = mongoose;
