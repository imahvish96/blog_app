const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
  },
  url: {
    type: String,
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
