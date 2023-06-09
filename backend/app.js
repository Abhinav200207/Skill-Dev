const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors")
app.use(cors({

    origin:'*',
    credentials:true,

}))
// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing Routes
const user = require("./Routes/User");
const boss = require("./Routes/Boss");
const course = require("./Routes/Courses");
const details = require("./Routes/Details");

// Using Routes
app.use("/user", user);
app.use("/boss", boss);
app.use("/course", course);
app.use("/details", details);



module.exports = app;
