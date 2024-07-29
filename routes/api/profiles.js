const express = require("express");
const router = express.Router();
const profileController = require("../../controllers/profileController");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/me")
  .get(verifyJWT, profileController.myProfile)
  .put(verifyJWT, profileController.updateProfile);

router.route("/:user").get(profileController.viewProfile);

module.exports = router;
