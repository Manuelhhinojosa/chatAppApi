const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("chapAppApi response for /.");
});

app.get("/chats", (req, res) => {
  res.send("chapAppApi response for /chats.");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
