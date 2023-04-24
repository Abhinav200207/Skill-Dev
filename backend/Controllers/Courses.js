const Course = require('../models/Course');
const Employee = require("../models/User")
exports.createCourse = async (req, res) => {
    try {
        const { title, skills, author, description, imageUrl } = req.body;

        const course = await Course.create({
            title: title,
            Skills: skills,
            author: author,
            description: description,
            imageUrl: imageUrl
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

exports.getmycourses = async (req, res) => {
    try {
        const { userId } = req.body
        const employee = await Employee.find({ _id: userId }).populate({ path: 'courses' })
        res.status(201).json({
            success: true,
            courses: employee
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }




}