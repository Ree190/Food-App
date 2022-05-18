const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    foodname: {
        type: String,
        required: true,
        max: 20
    }
}, {
    item_id: {
        type: Number,
        required: true,
        unique: true,
    }
}, {
    description: {
        type: String,
        required: true,
        max: 600
    }
}, {
    price: {
        type: Number,
        required: true,
    }
}, {

    rating: {
        type: Number,
        required: true
    }
}, {
    images: {
        type: String,
        required: true
    }
})

const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;