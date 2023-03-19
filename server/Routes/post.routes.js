const { Router } = require("express");
const {
  getPosts,
  savePost,
  getPostById,
} = require("../controller/post.controller");
const { verifyUser, verifyToken, refreshToken } = require("../middleware");
const { upload } = require("../utils");

const postRouter = Router();

postRouter.get("/", verifyToken, getPosts);
postRouter.post("/newpost", upload.single("coverImage"), savePost);
postRouter.get("/:id", getPostById);

module.exports = postRouter;
