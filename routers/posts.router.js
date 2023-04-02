const express = require("express");
const router = express.Router();

const {
  getPosts,
  createPost,
  postDelete,
  updatePost,
  updateView,
} = require("../controller/posts.controller");

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.delete("/posts/:id", postDelete);
router.patch("/posts/:id", updatePost);
router.put("/posts", updateView);

module.exports = router;
