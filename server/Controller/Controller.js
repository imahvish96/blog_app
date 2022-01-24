const Blogs = require('../models/Model');
//const User = require('../models/Model');


module.exports.blog_get = (req, res) => {
  Blogs.find()
    .then((post) => {
      res.status(200).json(post)
    })
    .catch((error) => res.status(400).json(`Error ${error}`));
};
