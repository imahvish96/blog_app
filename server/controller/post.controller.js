const Post = require('../models/post.model');
const Blogs = require('../models/post.model');

/**
 * to get blog_post 
 * @param {*} req 
 * @param {*} res 
 */
const getPosts = (req, res) => {
  Post.find()
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(400).json(`Error ${error}`));
};

const savePost = (req, res) => {
    let { title, blog } = req.body;
    let Newthumb = req.file.destination + '/' + req.file.filename;
    let thumb = Newthumb.replace('./public/', '');
    let url = 'http://localhost:4000/' + thumb;
    // let url = 'http://localhost:4000/' + newThumb
    let Posts = new Post({ title, blog, url });
    Posts.save((err) => {
      if (err) {
        return err;
      }
      res.send(console.log(Posts));
    });
  }

const getPostById = async (req, res) => {
  let SingleBlog = await Blogs.findById(req.params.id);
  if (SingleBlog) res.json(SingleBlog);
  else res.sendStatus(400);
}

module.exports = {
    getPosts,
    savePost,
    getPostById
}
