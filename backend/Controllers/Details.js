const Employee = require('../models/User');

class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const city = this.queryStr.city
            ? {
                city: {
                    $regex: this.queryStr.city,
                    $options: "i",
                },
            }
            : {};
        const state = this.queryStr.state
            ? {
                state: {
                    $regex: this.queryStr.state,
                    $options: "i",
                },
            }
            : {};

        const skills = this.queryStr.skill
            ?
            {
                skills: {
                    $regex: this.queryStr.skill,
                    $options: "i",
                }
            }
            : {};

        const search = { ...city, ...state, ...skills }

        this.query = this.query.find({ ...search });
        return this;
    }
}

exports.getDetails = async (req, res) => {
    try {
        const apiFeatures = new ApiFeatures(Employee.find(), req.query).search();
        const employee = await apiFeatures.query;

        res.status(201).json({
            success: true,
            employee
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}