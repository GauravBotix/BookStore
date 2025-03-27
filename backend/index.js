const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_LINK);



const bookRoute = require('./routes/bookRoute');
const userRoute = require('./routes/userRoute');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/book', bookRoute);
app.use('/user', userRoute);



const port = process.env.PORT;
app.listen(port,() => {
    console.log('app is listening on port:' + port);
})