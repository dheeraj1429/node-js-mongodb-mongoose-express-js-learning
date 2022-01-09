const mongoose = require('mongoose');

// connected to db
mongoose
    .connect('mongodb://localhost:27017/apiData')
    .then(() => {
        console.log('connected..');
    })
    .catch((err) => {
        console.log(err);
    });
