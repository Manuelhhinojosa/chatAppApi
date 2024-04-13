// dependencies
const express = require("express");
// router
const router = express.Router();
// controller
const userController = require("../controllers/userControllers");

// passing controllers functions
router.post("/signup", userController.signupUser);
router.post("/login", userController.loginUser);

module.exports = router;
