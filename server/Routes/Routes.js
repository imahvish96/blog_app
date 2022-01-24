const { Router } = require('express');
const router = Router();
const { blog_get } = require('../Controller/Controller');
const multer = require('multer');
const Blogs = require('../models/Model');
const User = require('../models/User');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findOne } = require('../models/Model');
// const privateroute = require('./PrivateRoute')

router.get('/api', blog_get);

const DIR = './public/upload';
const storage = multer.diskStorage({
  destination: DIR,
  filename: (req, file, cb) => {
    cb(
      null,
      `${new Date().toISOString().replace(/:/g, '-')}${file.originalname
        .split(' ')
        .join('_')}`
    );
  },
});

let Upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

router.post('/api/writeblog', Upload.single('file'), (req, res) => {
  let { title, blog } = req.body;
  let Newthumb = req.file.destination + '/' + req.file.filename;
  let thumb = Newthumb.replace('./public/', '');
  let url = 'http://localhost:4000/' + thumb;
  // let url = 'http://localhost:4000/' + newThumb
  let Posts = new Blogs({ title, blog, url });
  Posts.save((err) => {
    if (err) {
      return err;
    }
    res.send(console.log(Posts));
  });
});

router.post('/api/signup', async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  let salt = await bcrypt.genSalt(10);
  let hashpassword = await bcrypt.hash(password, salt);
  password = hashpassword;
  let Users = new User({ firstName, lastName, email, password });
  try {
    let saveUser = await Users.save();
    res.redirect('login');
  } catch (err) {
    throw err;
  }
});

router.post('/api/login', async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);
  let Users = await User.findOne({ email });
  if (!Users) {
    res.redirect('login');
  }

  let validPassword = bcrypt.compare(password, Users.password);
  if (!validPassword) {
    res.redirect('login');
  } else {
    let token = jwt.sign({ _id: Users._id }, process.env.TOKEN_SECREAT);
    res.cookie('Oauth_token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    res.status(200).json({ token });
  }
});

router.get('/api/writeblog', async (req, res) => {
  res.status(200).json(token);
});

router.get('/api/login', async (req, res) => {
  console.log(token);
  res.status(200).json(token);
});

router.get('/api/logout', (req, res) => {
  res.cookie('Oauth_token', '', { maxAge: 1 });
  res.status(200).json();
});

router.get('/api/:id', async (req, res) => {
  let SingleBlog = await Blogs.findById(req.params.id);
  if (SingleBlog) res.json(SingleBlog);
  else res.sendStatus(400);
});

module.exports = router;
