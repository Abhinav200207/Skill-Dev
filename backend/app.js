const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing Routes
const user = require("./routes/User");
const details = require("./routes/Details");
const courses = require("./routes/Courses");

// Using Routes
app.use("/user", user);
app.use("/details", details);
app.use("/courses", courses);



module.exports = app;
