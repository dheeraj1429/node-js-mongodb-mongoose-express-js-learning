const UserStoreRef = require('../models/dbSchema/apiSchema');

const getForm = (req, res) => {
    res.render('tamplate/apiStore');
};

const postFormData = async (req, res) => {
    console.log(req.body);
    try {
        const { id, posterUrl, shortTitle, ragulerPrice, Deal_of_the_Day, anwsered, offer, Discription, About } = req.body;

        const apidataRef = new UserStoreRef({
            id,
            posterUrl,
            shortTitle,
            ragulerPrice,
            Deal_of_the_Day,
            anwsered,
            offer,
            Discription,
            About,
        });

        const result = await apidataRef.save();
    } catch (err) {
        console.log(err);
    }
    res.send('done');
};

module.exports = {
    getForm,
    postFormData,
};
