const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/main');
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000, () =>
    console.log("Servidor corriendo en el puerto 3000"));