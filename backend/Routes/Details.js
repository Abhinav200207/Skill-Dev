const express = require("express");
const { getDetails } = require("../Controllers/Details");
const router = express.Router();

router.route("/employee").get(getDetails);


module.exports = router;