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
    const DAYS_30 = new Date().getDate() + 30;
    const Users = await User.findOne({ email });
    if (!Users) res.status(404).json("Email or Password is invalid");

    const validPassword = await bcrypt.compare(password, Users.password);
    if (validPassword) {
      const accessToken = jwt.sign(
        { id: Users._id },
        process.env.ACCESS_TOKEN_SECREAT,
        {
          expiresIn: "60s",
        }
      );
      const refreshToken = jwt.sign(
        { id: Users._id },
        process.env.REFRESH_TOKEN_SECREAT,
        {
          expiresIn: "90d",
        }
      );
      res.cookie("OAuth_Token", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60),
        sameSite: "none",
        secure: true,
      });
      res.cookie("Refresh_Token", refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 9000000),
        sameSite: "none",
        secure: true,
      });
      return res.status(200).json({
        data: {
          accessToken,
          refreshToken,
          message: "You are now logedin successfully",
        },
      });
    }
    return res.status(401).json({
      data: {
        error: "Unauthorized",
        status_code: "401",
        message: "Email or Password didn't match in our record",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const refreshSession = (req, res) => {
  const token = req.token;
  res.status(200).json({ data: { succsss: "verifyed", token } });
};

const logout = (req, res) => {
  res.cookie("Oauth_token", "", {
    expires: new Date(Date.now() + 1000),
  });
  res.cookie("Refresh_Token", "", {
    expires: new Date(Date.now() + 1000),
  });
};

module.exports = {
  login,
  signup,
  logout,
  refreshSession,
};
