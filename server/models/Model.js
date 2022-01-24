const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  blog: {
    type: String,
    required: true
  },
  url: {
    type: String,
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
