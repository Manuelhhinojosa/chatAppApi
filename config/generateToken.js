// dependencies
const jwt = require("jsonwebtoken");

// functions
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// export
module.exports = generateToken;
