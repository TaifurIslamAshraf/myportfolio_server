const Posts = require("../models/posts.model");

const getPosts = async (req, res) => {
  try {
    const AllPosts = await Posts.find();
    res.status(200).json({
      success: true,
      message: "Posts get successfully",
      status: 200,
      AllPosts,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const post = req.body;
    console.log(post);
    const newPost = new Posts(post);
    await newPost.save();
    res.status(201).json({
      success: true,
      message: "posts successfully created",
      status: 201,
      newPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    console.log(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const post = await Posts.findByIdAndUpdate(id, updateData, { new: true });
    res.json({
      success: true,
      status: 200,
      post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateView = async (req, res) => {
  try {
    const { viewsId, views } = req.body;
    const post = await Posts.findByIdAndUpdate(viewsId, { views });
    res.json({
      success: true,
      status: 200,
      post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const postDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.findByIdAndDelete(id);
    if (!post) {
      res.status(404).json({ message: "post not found" });
    }
    res.json({
      success: true,
      message: "post delete successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  getPosts,
  createPost,
  postDelete,
  updatePost,
  updateView,
};
