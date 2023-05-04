const Auth = require("../models/authModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// Register
exports.register = async (req, res) => {
  const { name, email, password, age, profilePic } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Auth({
      name,
      email,
      password: hashedPassword,
      age,
      profilePic,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while registering" });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Received Login request from client", req.body);

  try {
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      profilePic: user.profilePic,
    };

    res.status(200).json({
      status: "success",
      data: {
        token,
        user: userData, // Send the user data to the client
      },
    });
    console.log("User logged in:", email);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

//logout
exports.logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while logging out" });
  }
};
