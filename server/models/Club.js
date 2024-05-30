const { Schema, model } = require('mongoose');

const clubSchema = new Schema({
    name: { type: String, required: true },
    currentBook: { type: Schema.Types.ObjectId, ref: 'Book' },
    pastBooks: { type: Schema.Types.ObjectId, ref: 'Book' },
    members: { type: Schema.Types.ObjectId, ref: 'User' },
    discussionTopics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }]  // Array to store multiple discussion topics
});

const Club = model('Club', clubSchema);
module.exports = Club;