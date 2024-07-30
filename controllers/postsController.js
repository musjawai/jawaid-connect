const Posts = require("../model/Posts");

const allPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    console.log(posts);
    res.json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const createPost = async (req, res) => {
  console.log(req._id);
  if (!req._id) return res.sendStatus(204);
  try {
    const post = await Posts.create({
      userId: req._id,
      content: req.body.content,
    });
    console.log(post);
    res.status(201).json({ message: `Post created by ${req._id}` });
  } catch (err) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createPost, allPosts };
