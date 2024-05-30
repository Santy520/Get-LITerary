const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String }, 
    clubs: [{ type: Schema.Types.ObjectId, ref: 'Club' }]
    // clubs -- to handle mutliple, when we add more!
});

const Book = model('Book', bookSchema);
module.exports = Book;