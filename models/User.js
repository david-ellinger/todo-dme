const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const User = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid()
    },
    username: String,
    preferences: mongoose.SchemaTypes.Mixed
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User);