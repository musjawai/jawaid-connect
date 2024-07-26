const express = require("express");
const router = express.Router();
const profileController = require("../../controllers/profileController");
const verifyJWT = require("../../middleware/verifyJWT");

router.route("/:user").get(profileController.viewProfile);

router.route("/me").get(verifyJWT, profileController.myProfile);

module.exports = router;
