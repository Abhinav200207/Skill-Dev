const express = require("express");

const { isAuthenticated } = require("../middlewares/auth");
const { register, login, logout, enroll, getEmployeeId } = require("../Controllers/User");
const router = express.Router();


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/enroll").post(isAuthenticated, enroll);

router.route("/getuserid").get(isAuthenticated, getEmployeeId);

module.exports = router;