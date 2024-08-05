const User = require("../model/User");
const userProfile = require("../model/userProfile");

const followUser = async (req, res) => {
  if (!req._id) return res.sendStatus(204);
  if (!req?.params.username) return res.sendStatus(400);
  try {
    const userToFollow = await User.findOne({ username: req.params.username });
    if (!userToFollow)
      return res.status(404).json({ message: "Invalid username" });
    if (userToFollow.followers.includes(req._id))
      return res
        .status(400)
        .json({ message: "You are already following this user" });
    const person_following = await User.findOneAndUpdate(
      { _id: req._id },
      { $addToSet: { following: userToFollow._id } },
      { new: true }
    );
    const person_getting_followed = await User.findOneAndUpdate(
      { _id: userToFollow._id },
      { $addToSet: { followers: person_following._id } },
      { new: true }
    );
    await userProfile.findOneAndUpdate(
      { userId: req._id },
      { $inc: { followingCount: 1 } }
    );
    await userProfile.findOneAndUpdate(
      { userId: userToFollow._id },
      { $inc: { followerCount: 1 } }
    );
    res.status(200).json({
      message: `${person_following.username} is now following ${person_getting_followed.username}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const unfollowUser = async (req, res) => {
  console.log(req._id);
  if (!req._id) return res.sendStatus(204);
  if (!req?.params.username) return res.sendStatus(400);
  try {
    const userToUnfollow = await User.findOne({
      username: req.params.username,
    });
    if (!userToUnfollow)
      return res.status(404).json({ message: "Invalid username" });
    if (!userToUnfollow.followers.includes(req._id))
      return res
        .status(400)
        .json({ message: "You are not following this user" });
    const person_unfollowing = await User.findOneAndUpdate(
      { _id: req._id },
      { $pull: { following: userToUnfollow._id } },
      { new: true }
    );
    const person_getting_followed = await User.findOneAndUpdate(
      { _id: userToUnfollow._id },
      { $pull: { followers: person_unfollowing._id } },
      { new: true }
    );
    await userProfile.findOneAndUpdate(
      { userId: req._id },
      { $inc: { followingCount: -1 } }
    );
    await userProfile.findOneAndUpdate(
      { userId: userToUnfollow._id },
      { $inc: { followerCount: -1 } }
    );
    res.json({
      message: `${person_unfollowing.username} unfollowed ${person_getting_followed.username}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { followUser, unfollowUser };
