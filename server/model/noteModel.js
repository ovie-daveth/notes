const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  // Reference the User model
        required: true,
    },
    notes: {
        type: String,
        required: false,
    }
});

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
