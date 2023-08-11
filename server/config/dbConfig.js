const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log('database Connected', connect.Connection.name);
    } catch (error) {
        throw new Error(`Failed to connect to due to ${error.message}`);
    }
    
}

module.exports = connectDB;