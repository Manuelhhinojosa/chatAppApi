// dependencies
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Atlas connection open");
  })
  .catch((err) => {
    console.log("Atlas connection error");
    console.log(err.message);
  });
