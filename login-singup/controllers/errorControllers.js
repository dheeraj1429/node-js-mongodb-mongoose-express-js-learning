const errorPage = (req, res) => {
    res.render('tamplates/pageNotFound', {
        headTitle: 'page not found',
    });
};

module.exports = {
    errorPage,
};
