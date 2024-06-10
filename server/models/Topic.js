const { Schema, model } = require('mongoose');

const topicSchema = new Schema({
    clubId: { type: Schema.Types.ObjectId, ref: 'Club' },
    title: { type: String, required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User'},
    bookId: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]  // References to Post model
    
});
const Topic = model('Topic', topicSchema);
module.exports = Topic;