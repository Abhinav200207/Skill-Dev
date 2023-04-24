const Boss = require("../models/Boss");
const Job = require("../models/job");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let boss = await Boss.findOne({ email });
        if (boss) {
            return res
                .status(400)
                .json({ success: false, message: "boss already exists" });
        }

        boss = await Boss.create({
            name,
            email,
            password,
        });

        const token = await boss.generateToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.status(201).cookie("token", token, options).json({
            success: true,
            boss,
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

        const boss = await Boss.findOne({ email }).select("+password")

        if (!boss) {
            return res.status(400).json({
                success: false,
                message: "boss does not exist",
            });
        }

        const isMatch = await boss.matchPassword(password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            });
        }

        const token = await boss.generateToken();

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.status(200).cookie("token", token, options).json({
            message:"login sucessfully",
            success: true,
            boss,
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


exports.addjobs = async (req, res) => {
    try {
        const { title, totalopenings, vacanciesleft } = req.body;

        const job = await Job.create({
            title: title,
            totalopenings: totalopenings,
            createdby: req.boss._id,
            vacanciesleft: vacanciesleft
        });

        const boss = await Boss.findById(req.boss._id);

        boss.jobs.unshift(job._id);

        await boss.save();
        res.status(201).json({
            success: true,
            job: job,
            message: "Job created",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


exports.addEmployee = async (req, res) => {
    try {
        const { emplid } = req.body;

        // this is where we have to add mail functinality

        const boss = await Boss.findById(req.boss._id);

        boss.employees.unshift(emplid);
        await boss.save();

        res.status(201).json({
            success: true,
            message: "Employee added",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
