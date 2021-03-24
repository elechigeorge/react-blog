const Schema = require('mongoose').Schema;
const Model = require('mongoose').model;




const UserSchema = new Schema({
    avatar: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    username: {
        type: String,
        defaut: "USER00002"
    },
    followers: {
        type: String,
        default: 0
    },
    following: {
        type: String,
        default: 0
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId
            }
        }
    ],

});



const User = Model("User", UserSchema);

module.exports = User;


