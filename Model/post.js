
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
        ref: 'post'
    },
    tags: {
        type: String
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
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId
            }
        }
    ]
});

mongoose.plugin(timestamp)

const Post = mongoose.model('Post', postSchema);

module.exports = Post;