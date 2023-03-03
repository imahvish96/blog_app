const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');


const signup = async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  let hashpassword = await bcrypt.hash(password, 10);
  let Users = new User({ firstName, lastName, email, password: hashpassword });
  console.log('RRRR', Users);
  try {
    await Users.save();
    res.status(201).json({ "message": "User created successfully" });
  } catch (error) {
    res.status(500)
  }
}

const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    const Users = await User.findOne({ email });
    if (!Users) res.status(404).json('Email or Password is invalid');

    const validPassword = await bcrypt.compare(password, Users.password);
    if (validPassword) {
      const token = jwt.sign({ _id: Users._id }, process.env.TOKEN_SECREAT);
      res.cookie('Oauth_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        secure: true
      });
      res.status(200).json({ token, "message": 'Success' });
      return;
    }
    res.status(401).json('Inavlid Password');

  } catch (error) {
    console.log(error);
  }

}

const logout = (req, res) => {
  res.cookie('Oauth_token', '', { maxAge: 1 });
  res.status(200).json();
}

module.exports = {
  login,
  signup,
  logout
}