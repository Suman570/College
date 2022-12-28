const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role :{
        type: String,
        enum: ['admin', 'user', 'new_florist', 'florist'],
        default: 'user'
    }
})

module.exports = mongoose.model('User', UserSchema);