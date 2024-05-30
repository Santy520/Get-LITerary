const { Schema, model } = require('mongoose');

const topicSchema = new Schema({
    clubId: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
    title: { type: String, required: true },
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]  // References to Post model
});

const Topic = model('Topic', topicSchema);
module.exports = Topic;
