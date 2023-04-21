const Boss = require("../models/Boss");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                message: "Please login first",
            });
        }

        const decoded = await jwt.verify(token, "dfrkfsesggrtg983gettewg2983grer298gjliugutgfig98wro8afnwhi4");

        req.boss = await Boss.findById(decoded._id);

        next();
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
