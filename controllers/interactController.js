const User = require("../model/User");
const Posts = require("../model/Posts");

// POST /posts/:postId/like: Like a post (requires authentication).
// POST /posts/:postId/unlike: Unlike a post (requires authentication).
// POST /posts/:postId/comment: Comment on a post (requires authentication).
// DELETE /posts/:postId/comment/:commentId: Delete a comment (requires authentication).

const likePost = async (req, res) => {
  if (!req._id) return res.sendStatus(204);
  if (!req?.params.postId) return res.sendStatus(400);
  try {
    const postToEdit = await Posts.findOne({ _id: req.params.postId });
    if (!postToEdit)
      return res.status(404).json({ message: "Post does not exist" });
    if (postToEdit.likes.includes(req._id))
      return res
        .status(400)
        .json({ message: "You have already liked this post" });
    await Posts.findOneAndUpdate(
      { _id: req.params.postId },
      { $addToSet: { likes: req._id } },
      { new: true }
    );
    res.json({ message: "Post liked!" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const unlikePost = async (req, res) => {
  if (!req._id) return res.sendStatus(204);
  if (!req?.params.postId) return res.sendStatus(400);
  try {
    const postToEdit = await Posts.findOne({ _id: req.params.postId });
    if (!postToEdit)
      return res.status(404).json({ message: "Post does not exist" });
    if (!postToEdit.likes.includes(req._id))
      return res.status(400).json({ message: "You have not liked this post" });
    await Posts.findOneAndUpdate(
      { _id: req.params.postId },
      { $pull: { likes: req._id } },
      { new: true }
    );
    res.json({ message: "Like removed" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const commentPost = async (req, res) => {
  if (!req._id) return res.sendStatus(204);
  if (!req?.params.postId) return res.sendStatus(400);
  if (!req?.body.content) return res.sendStatus(400);
  try {
    const user = await User.findOne({ _id: req._id });
    const postToEdit = await Posts.findOne({ _id: req.params.postId });
    if (!postToEdit)
      return res.status(404).json({ message: "Post does not exist" });
    await Posts.findOneAndUpdate(
      { _id: req.params.postId },
      { $push: { comments: { user: req._id, content: req.body.content } } },
      { new: true }
    );
    res.json({ message: `${user.username} commented: ${req.body.content}` });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { likePost, unlikePost, commentPost };
