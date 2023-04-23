const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    numberOfEnrollments: {
        type: Number,
        default: 0,
    },
    Skills: {
        type: String,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
        }
    ]
});

module.exports = new mongoose.model("Course", courseSchema)