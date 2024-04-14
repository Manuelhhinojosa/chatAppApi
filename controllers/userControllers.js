// model
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// token generator
const generateToken = require("../config/generateToken");

// functions
//

// sign up user

const signupUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const img = req.file;
  const pic = {
    url: img.path,
    filename: img.filename,
    fileOriginalName: img.originalname,
  };

  if (!name || !email || !password || !img) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(410);
    throw new Error("User alredy exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

// login user

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.json(401);
    throw new Error("Invalid email or password");
  }
});

// exporting functions
module.exports = {
  signupUser,
  loginUser,
};
