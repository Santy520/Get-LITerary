const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    topicId: { type: Schema.Types.ObjectId, ref: 'Topic', required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      }

});

const Post = model('Post', postSchema);
module.exports = Post;