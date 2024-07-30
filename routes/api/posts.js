const express = require("express");
const router = express.Router();
const postsController = require("../../controllers/postsController");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/")
  .post(verifyJWT, postsController.createPost)
  .get(postsController.allPosts);

module.exports = router;
