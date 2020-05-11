require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Port = process.env.PORT || 1000;

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database...");
}).catch(err => {
    console.log(`Could not connect to the database. ${err}`);
    console.log(`Exiting now...`);
    process.exit();
});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    //console.log(req);
    res.json({"message": `Welcome to Hotelio application. ©2020`});
});

// Require all route
require('./src/routes/UserRoute')(app);
require('./src/routes/HotelRoute')(app);

app.listen(Port, () => console.log(`Running in Port : ${Port}`));