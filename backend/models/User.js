const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },

    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, "Password must be at least 6 characters"],
        select: false,
    },

    city: {
        type: String,
    },
    state: {
        type: String,
    },
    bio: {
        type: String,
    },
    dob: {
        type: Date,
    },
    skills: [
        {
            type: String,
        },
    ],
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    pastrating: [
        {
            rating: {
                type: Number,
            },
            employer: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Boss'
            }
        }
    ],

});






employeeSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

employeeSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

employeeSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, "dfrkfsesggrtg983gettewg2983grer298gjliugutgfig98wro8afnwhi4");
};

module.exports = mongoose.model("Employee", employeeSchema);
