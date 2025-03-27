const bookModel = require('../model/bookModel');

const getBook = async (req, res) => {
    try {
        const book = await bookModel.find();
        res.status(200).json(book);

    } catch (err) {
        console.log('Error:', err);
        res.status(500).json(err);
    }
}


module.exports = getBook;