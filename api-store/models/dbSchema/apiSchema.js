const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    id: Number,
    posterUrl: {
        type: String,
        required: true,
        unique: [true, 'poster URL is already present'],
    },
    shortTitle: String,
    ragulerPrice: {
        type: Number,
        required: true,
    },
    Deal_of_the_Day: {
        type: Number,
        required: true,
    },
    anwsered: String,
    offer: String,
    Discription: {
        type: String,
        required: true,
    },
    About: String,
});

const UserStoreRef = new mongoose.model('apidata', apiSchema);

module.exports = UserStoreRef;
