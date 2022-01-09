const express = require('express');
const path = require('path');
require('./models/db/db');

const app = express();
app.use(express.urlencoded({ extended: true }));

const adminRouter = require('./routes/admin.router');
const indexRouter = require('./routes/index.router');

const RootFolder = require('./helper/RootFolder');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(RootFolder, 'public')));

app.use('/form', adminRouter);
app.use('/api', indexRouter);

// Server
app.listen(port, () => {
    console.log('server running 🏃');
});
