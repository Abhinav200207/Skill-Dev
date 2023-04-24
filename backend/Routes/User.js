const express = require("express");

const { isAuthenticated } = require("../middlewares/auth");
const { register, login, logout, enroll ,info} = require("../Controllers/User");
const router = express.Router();


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/enroll").post(enroll);
router.post("/getinfo",info)
module.exports = router;