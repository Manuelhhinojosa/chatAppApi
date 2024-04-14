// dependencies
const express = require("express");
// router
const router = express.Router();
// controller
const userController = require("../controllers/userControllers");

// middleware
const upload = require("../middleware/multer");

// passing controllers functions
router.post("/signup", upload.single("image"), userController.signupUser);
router.post("/login", userController.loginUser);

module.exports = router;
