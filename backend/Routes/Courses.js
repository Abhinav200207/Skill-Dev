const express = require("express");
const { createCourse, getAllCourses,getmycourses } = require("../Controllers/Courses");
// const {isAuthenticated}=require("../middlewares/auth")
const router = express.Router();

router.route('/addCourse').post(createCourse);

router.route('/getCourse').get(getAllCourses);

router.route('/getmyCourse').post(getmycourses);
module.exports = router;