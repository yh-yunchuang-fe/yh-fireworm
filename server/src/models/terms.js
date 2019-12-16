const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const termsSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true,
        unique: true,
        trim: true,
        maxlength: 20
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    subject: {
        type: String,
        enum: ['1', '2','3', '4', '5', '6']
    },
    author: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('terms', termsSchema);