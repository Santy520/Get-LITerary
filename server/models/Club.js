const { Schema, model } = require('mongoose');

const clubSchema = new Schema({
    name: { type: String, required: true },
    // currentBook: { type: Schema.Types.ObjectId, ref: 'Book' },
    currentBook: { type: String},
    // pastBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }], // Changed to array
    pastBooks: [{ type: String }], // array of bookIds from google books api
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Changed to array
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }]
});

const Club = model('Club', clubSchema);
module.exports = Club;
