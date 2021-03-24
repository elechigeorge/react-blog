
const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const postSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    tags: {
        type: [String],
        index: true
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
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

const Post = mongoose.model('Post', postSchema);

module.exports = Post;