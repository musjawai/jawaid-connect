const Posts = require("../model/Posts");
const userProfile = require("../model/userProfile");

const allPosts = async (req, res) => {
  try {
    const posts = await Posts.find()
      .populate("userId", "username")
      .sort({ createdAt: -1 });
    console.log(posts);
    res.json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getPost = async (req, res) => {
  if (!req?.params.postId) return res.sendStatus(400);
  const post = await Posts.findById(req.params.postId);
  if (!post)
    return res
      .status(204)
      .json({ message: `Tweet ID ${req.params.postId} does not exist` });
  res.json(post);
};

const createPost = async (req, res) => {
  console.log(req._id);
  if (!req._id) return res.sendStatus(204);
  try {
    const user = await userProfile.findOne({ userId: req._id });
    const post = await Posts.create({
      userId: req._id,
      content: req.body.content,
    });
    user.tweetsCount = user.tweetsCount + 1;
    await user.save();
    console.log(post);
    res.status(201).json({ message: `Post created by ${user.username}` });
  } catch (err) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createPost, allPosts, getPost };
