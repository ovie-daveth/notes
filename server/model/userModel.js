const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    username: {
        type: String,
        required:  [true, "Username is required"],
        unique: [true, "Username is already taken"]
    },
    email: {
        type: String,
        required:  [true, "email is required"],
        unique: [true, "email is already taken"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
    }
},
{timestamps: true}
)

const User = mongoose.models.User || mongoose.model("user", userschema)
module.exports = User