const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    imageUrl: String,
});

const UserDataRegisterRef = new mongoose.model('userData', userSchema);

module.exports = UserDataRegisterRef;
