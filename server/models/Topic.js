const { Schema, model } = require('mongoose');

const topicSchema = new Schema({
    clubId: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
    title: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bookId: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]  // References to Post model
    
});
const Topic = model('Topic', topicSchema);
module.exports = Topic;