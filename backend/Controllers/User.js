const Employee = require("../models/User");

exports.register = async (req, res) => {
    try {
        const { name, email, password, city, bio, dob } = req.body;

        let employee = await Employee.findOne({ email });
        if (employee) {
            return res
                .status(400)
                .json({ success: false, message: "employee already exists" });
        }

        employee = await Employee.create({
            name,
            email,
            password,
            city,
            bio,
            dob
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