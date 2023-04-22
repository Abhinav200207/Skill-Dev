const express = require("express");

const { isAuthenticated } = require("../middlewares/authBoss");
const { register, login, logout, addjobs } = require("../Controllers/Boss");
const router = express.Router();


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/addjobs").post(isAuthenticated, addjobs);

module.exports = router;