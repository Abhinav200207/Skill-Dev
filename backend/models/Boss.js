const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const crypto = require("crypto");

const bossSchema = new mongoose.Schema({
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
    employees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Employee",
        }
    ],
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
        }
    ]


});






bossSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});
bossSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

bossSchema.methods.generateToken = function () {
    return jwt.sign({ _id: this._id }, "dfrkfsesggrtg983gettewg2983grer298gjliugutgfig98wro8afnwhi4");
};

module.exports = mongoose.model("Boss", bossSchema);
