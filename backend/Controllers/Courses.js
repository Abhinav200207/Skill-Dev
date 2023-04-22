const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    try {
        const { title, skills, author, description } = req.body;

        const course = await Course.create({
            title: title,
            Skills: skills,
            author: author,
            description: description
        });

        res.status(201).json({
            success: true,
            courses: course
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getAllCourses = async (req, res) => {
    try {
        const course = await Course.find({});

        res.status(201).json({
            success: true,
            courses: course
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}