const mongoose = require('mongoose');

// Create Schema
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    }
});

// Export model
module.exports = mongoose.model('Student', StudentSchema);
