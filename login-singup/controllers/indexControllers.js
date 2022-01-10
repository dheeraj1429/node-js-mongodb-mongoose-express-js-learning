const UserModel = require('../models/users');

const getForm = (req, res) => {
    res.render('tamplates/register', {
        headTitle: 'register',
    });
};

let email, password;

const postFormData = async (req, res) => {
    try {
        const { repassword, firstName, lastName } = req.body;

        email = req.body.email;
        password = req.body.password;

        if (email && password && repassword && firstName && lastName) {
            if (password === repassword) {
                const userRef = new UserModel({
                    email,
                    password,
                    firstName,
                    lastName,
                });

                const result = await userRef.save();

                res.render('tamplates/success', {
                    headTitle: 'success',
                    result,
                });
            } else {
                res.send('error');
            }
        } else {
            res.send('error');
        }
    } catch (err) {
        console.log(err);
    }
};

const getLogInform = (req, res) => {
    res.render('tamplates/login', {
        headTitle: 'login',
    });
};

const postLoginForm = async (req, res) => {
    try {
        email = req.body.email;
        password = req.body.password;

        const result = await UserModel.find({ email, password });

        if (result.length > 0) {
            res.render('tamplates/success', {
                headTitle: 'success',
                result,
            });
        } else {
            res.send('no user present');
        }
    } catch (err) {
        console.log(err);
    }
};

const deleteAccountPost = async (req, res) => {
    try {
        const resultDeleteData = await UserModel.deleteOne({ $and: [{ email }, { password }] });
        res.send('account deleted!! <a href="/">Home</a>');
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getForm,
    postFormData,
    getLogInform,
    postLoginForm,
    deleteAccountPost,
};
