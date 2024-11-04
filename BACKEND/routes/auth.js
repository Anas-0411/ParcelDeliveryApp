const express = require("express");
const { loginUser, registerUser } = require("../controllers/auth");
const router = express.Router();

//REAGISTRATION
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);

module.exports = router;
