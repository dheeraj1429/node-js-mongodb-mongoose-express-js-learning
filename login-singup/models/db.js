const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/loginAndSignIn')
    .then(() => {
        console.log('connected..');
    })
    .catch((err) => {
        console.log(err);
    });
