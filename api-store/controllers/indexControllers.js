const UserStoreRef = require('../models/dbSchema/apiSchema');

const apiData = async (req, res) => {
    try {
        const results = await UserStoreRef.find();
        if (results) {
            res.status(200).json({
                total: results.length,
                results,
            });
        } else {
            res.status(400).send(`cont't get`);
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    apiData,
};
