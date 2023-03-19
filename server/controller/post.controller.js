const Post = require("../models/post.model");
const Blogs = require("../models/post.model");
const { BASE_URL, SUCCESS_ON_POST } = require("../constants");

const getPosts = (req, res) => {
  Post.find()
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(400).json(`Error ${error}`));
};

const savePost = (req, res) => {
  const { title, post } = req.body;
  const tags = req.body.tags.split(",");
  const coverPath = req.file.destination + "/" + req.file.filename;
  const url = BASE_URL + coverPath.replace("./public/", "");
  new Post({ title, post, tags, url }).save((err) => {
    if (err) res.status(500).json(err);
    res.status(200).json({ Success: SUCCESS_ON_POST });
  });
};

const getPostById = async (req, res) => {
  let SingleBlog = await Blogs.findById(req.params.id);
  if (SingleBlog) res.json(SingleBlog);
  else res.sendStatus(400);
};

module.exports = {
  getPosts,
  savePost,
  getPostById,
};
