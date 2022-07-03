const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema(
    {
        name: String,
        branch: String,
        roll: {
            type: Number,
        },
        year: Number,
        participation: String,
        date: {
            type: Date,
            default: Date.now()
        }
    }
);

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        password: String,
        permissionRank: Number,
        date: {
            type: Date,
            default: Date.now()
        }
    }
);

const Registration = new mongoose.model("Registration", registrationSchema);
const Admin = new mongoose.model("Admin", adminSchema);

module.exports = { Registration, Admin };
