const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
    image: String,
    category: String,
    name: String,
    title: String,
    price: Number

});

module.exports = mongoose.model('Book', bookSchema);