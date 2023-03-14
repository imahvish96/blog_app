const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  const Users = new User({
    firstName,
    lastName,
    email,
    password: hashpassword,
  });
  try {
    await Users.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500);
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    const Users = await User.findOne({ email });
    if (!Users) res.status(404).json("Email or Password is invalid");

    const validPassword = await bcrypt.compare(password, Users.password);
    if (validPassword) {
      const token = jwt.sign({ id: Users._id }, process.env.TOKEN_SECREAT, {
        expiresIn: "30m",
      });
      res.cookie("OAuth_Token", token, {
        domain: "http://localhost:3000",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 30),
        sameSite: "none",
        secure: true,
      });
      return res.status(200).json({ token, message: "Success" });
    }
    return res.status(401).json("Invalid Password");
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  res.cookie("Oauth_token", "", {
    expires: new Date(Date.now() + 1000 * 30),
  });
  res.status(200).json({ Message: "Sing Out" });
};

module.exports = {
  login,
  signup,
  logout,
};
