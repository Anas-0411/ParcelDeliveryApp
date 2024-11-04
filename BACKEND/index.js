const express = require("express");
const app = express();
// const cors = require("cors");
const db = require("./db");
// Middlewares
// app.use(cors());
app.use(express.json());

// IMPORTING ROUTES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const parcelRoute = require("./routes/parcel");

// USING ROUTES
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/parcel", parcelRoute);

// Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
