const express = require("express");

const { isAuthenticated } = require("../middlewares/authBoss");
const { register, login, logout, addjobs, info } = require("../Controllers/Boss");
const router = express.Router();


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/addjobs").post(addjobs);

router.route("/getProfile").post(info);


module.exports = router;