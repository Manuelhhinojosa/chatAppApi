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
// error handler functions
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// create app server
const app = express();

// config to accept json data
app.use(express.json());

// routes.
app.get("/api", (req, res) => {
  res.send("API for chapAppApi is running succesfully");
});
app.use("/api/user", userRoutes);

// error handling
app.use(notFound);
app.use(errorHandler);

// production
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
