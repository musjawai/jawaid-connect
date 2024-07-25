const express = require("express");
const router = express.Router();
const profileController = require("../../controllers/profileController");

router.route("/:user").get(profileController.viewProfile);

module.exports = router;
