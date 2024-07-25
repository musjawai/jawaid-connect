const express = require("express");
const router = express.Router();
const refreshController = require("../controllers/refreshController");

router.route("/").get(refreshController.handleRefreshToken);

module.exports = router;
