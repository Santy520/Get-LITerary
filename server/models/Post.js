const { Schema, model } = require('mongoose');
const { formatDate } = require('../utils/dateFormat'); // Import the formatDate utility

const postSchema = new Schema({
    topicId: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => formatDate(timestamp), // Use formatDate here
    },
}, {
    toJSON: {
        getters: true,
    }
});

const Post = model('Post', postSchema);
module.exports = Post;
