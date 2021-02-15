
const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const postSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    tags: {
        type: [String],
        index: true
    },
    comments: [
        {
            body: String,
            date: Date
        }
    ],
    published: {
        type: Boolean,
        default: true
    },
    like: {
        type: Number,
        default: 0
    }
});

mongoose.plugin(timestamp)

const PostSchema = mongoose.model('PostSchema', postSchema);

module.exports = PostSchema;