// setting up express app dependency
const express = require("express");
// for sensitive vars
const dotenv = require("dotenv");
// configuration for sensitive vars
dotenv.config();
// connection to database
require("./config/db");
// router
const userRoutes = require("./routes/userRoutes");

// create app server
const app = express();

// routes.
app.get("/api", (req, res) => {
  res.send("API for chapAppApi is running succesfully");
});

app.use("/api/user", userRoutes);

// production
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
