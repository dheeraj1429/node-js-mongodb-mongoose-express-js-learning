const path = require('path');
const express = require('express');
require('./models/db');

const indexRouter = require('./routes/indexRouter');
const rootFolder = require('./util/rootFolder');
const errorRouter = require('./routes/errorRouter');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(rootFolder, 'public')));

const port = process.env.PORT || 3000;

app.use('/', indexRouter);
app.use(errorRouter);

app.listen(port, () => {
    console.log('server runing 🏃');
});
