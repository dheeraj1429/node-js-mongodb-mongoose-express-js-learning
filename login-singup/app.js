const path = require('path');
const express = require('express');

const indexRouter = require('./routes/indexRouter');
const rootFolder = require('./util/rootFolder');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(rootFolder, 'public')));

const port = process.env.PORT || 3000;

app.use('/', indexRouter);

app.listen(port, () => {
    console.log('server runing 🏃');
});
