const express = require('express');

const port = process.env.PORT || 3000;
const RootFolder = require('./util/Root');
const shopRouter = require('./routes/shop.router');

require('./model/db/db');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(RootFolder));

app.use('/form', shopRouter);

app.listen(port, () => {
    console.log('server rungnin 🏃');
});
