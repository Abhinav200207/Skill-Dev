const express = require("express");

const { isAuthenticated } = require("../middlewares/auth");
const { register, login, logout } = require("../Controllers/User");
const router = express.Router();


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

module.exports = router;