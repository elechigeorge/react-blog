const Schema = require('mongoose').Schema;
const Model = require('mongoose').model;




const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        defaut: "USER00002"
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },
    followers: {
        type: String,
        default: 0
    },
    following: {
        type: String,
        default: 0
    },
    postCount: {
        type: String,
        default: 0
    }

});



const User = Model("User", UserSchema);

module.exports = User;


