const mongoose = require('mongoose');

// Connected the db
mongoose
    .connect('mongodb://localhost:27017/form', {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log('connected..');
    })
    .catch((err) => {
        console.log(err);
    });
