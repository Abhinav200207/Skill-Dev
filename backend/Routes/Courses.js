const express = require("express");
const { createCourse, getAllCourses } = require("../Controllers/Courses");
const router = express.Router();

router.route('/addCourse').post(createCourse);

router.route('/getCourse').get(getAllCourses);

module.exports = router;