// setting up express app dependency
const express = require("express");
// for sensitive vars
const dotenv = require("dotenv");
// create app server
const app = express();
// configuration for sensitive vars
dotenv.config();
// connection to database
require("./config/db");

// inital test routes.
app.get("/", (req, res) => {
  res.send("chapAppApi response for /.");
});

app.get("/chats", (req, res) => {
  res.send("chapAppApi response for /chats.");
});

// production
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
