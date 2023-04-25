const Employee = require("../models/User");
const Course = require("../models/Course");

exports.register = async (req, res) => {
    try {
        const { name, email, password, city, state, bio, dob, skills } = req.body;

        let employee = await Employee.findOne({ email });
        if (employee) {
            return res
                .status(400)
                .json({ success: false, message: "employee already exists" });
        }

        employee = await Employee.create({
            name: name,
            email: email,
            password: password,
            city: city,
            state: state,
            bio: bio,
            dob: dob,
            skills: skills
        });

        const token = await employee.generateToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.status(201).cookie("token", token, options).json({
            success: true,
            employee,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const employee = await Employee.findOne({ email }).select("+password")

        if (!employee) {
            return res.status(400).json({
                success: false,
                message: "employee does not exist",
            });
        }
        console.log(employee, password)
        const isMatch = await employee.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

        const token = await employee.generateToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.status(200).cookie("token", token, options).json({
            success: true,
            employee,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.logout = async (req, res) => {
    try {
        res
            .status(200)
            .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
            .json({
                success: true,
                message: "Logged out",
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

exports.enroll = async (req, res) => {
    try {
        const { courseId, userId } = req.body;

        const course = await Course.findById(courseId);

        course.numberOfEnrollments += 1;
        course.students.unshift(userId);

        const employee = await Employee.findById(userId);

        employee.courses.unshift(courseId);


        await course.save();
        await employee.save();

        res.status(201).json({
            success: true,
            message: "enrollment sucessful"
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.info = async (req, res) => {
    try {
        const { userId } = req.body
        const user = await Employee.findById(userId).populate({ path: 'courses' })
        res.status(201).json({
            success: true,
            message: "enrollment sucessful",
            user

        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}

exports.updateUser = async (req, res) => {
    try {
        const { _id } = req.body
        const employee = await Employee.findById(_id).populate({ path: 'courses' });

        const { name, city, bio, state, dob, skills } = req.body;

        employee.name = name;
        employee.city = city;
        employee.state = state;
        employee.dob = dob;
        employee.bio = bio;
        employee.skills = skills;

        await employee.save();

        res.status(200).json({
            success: true,
            employee: employee,
            message: "Profile Updated",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getEmployeeId = async (req, res) => {
    try {
        res.status(201).json({
            success: true,
            user_id: req.user._id,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}