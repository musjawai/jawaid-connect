const express = require("express");
const router = express.Router();
const postsController = require("../../controllers/postsController");
const interactController = require("../../controllers/interactController");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/")
  .post(verifyJWT, postsController.createPost)
  .get(postsController.allPosts);

router.route("/:postId/like").post(verifyJWT, interactController.likePost);
router.route("/:postId/unlike").post(verifyJWT, interactController.unlikePost);

router
  .route("/:postId")
  .get(postsController.getPost)
  .put(verifyJWT, postsController.editPost);
module.exports = router;
