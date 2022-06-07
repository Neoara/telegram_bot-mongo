const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRouter = require('./routers/usersRouter');
require("./modules/telegramBot");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', usersRouter);

const CONNECTION_STRING = 'mongodb+srv://realibi:intersekt01@cluster0.8rc2y.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING, (err) => {
    if(err) return console.log("Connection Error");
    app.listen(8080);
});
