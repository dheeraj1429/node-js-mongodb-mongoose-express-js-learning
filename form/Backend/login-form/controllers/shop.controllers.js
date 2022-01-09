const mongoose = require('mongoose');
const UserDataRegisterRef = require('../model/db/register');

const getFormPage = (req, res) => {
    res.render('shop/form');
};

const formPostReq = async (req, res) => {
    try {
        const { name, email, number, massage } = req.body;
        console.log(name, email, number, massage);

        const userRegisterRef = new UserDataRegisterRef({
            name,
            email,
            number,
            massage,
        });

        const result = await userRegisterRef.save();
        console.log(result);

        res.render('shop/form');
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getFormPage,
    formPostReq,
};
