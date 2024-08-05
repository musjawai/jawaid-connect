const express = require("express");
const router = express.Router();
const profileController = require("../../controllers/profileController");
const followersController = require("../../controllers/followersController");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/me")
  .get(verifyJWT, profileController.myProfile)
  .put(verifyJWT, profileController.updateProfile);

router
  .route("/:username/follow")
  .post(verifyJWT, followersController.followUser);

router
  .route("/:username/unfollow")
  .post(verifyJWT, followersController.unfollowUser);

router.route("/:user").get(profileController.viewProfile);

module.exports = router;
