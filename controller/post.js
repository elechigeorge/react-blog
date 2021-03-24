const mongoose = require('mongoose');
const Post = require('../Model/post');

module.exports = {
    getPosts: async function (req, res) {
        try {
            const post = await Post.find({ published: true });

            res.status(200).send(post)
        } catch (error) {
            res.status(500).send({ msg: "Server error" + error.message })
        }
    },
    getPost: async function (req, res) {
        try {
            const post = await Post.findById(req.params.id);

            res.status(200).send(post)
        } catch (error) {
            res.status(500).send({ msg: "Server error" + error.message })
        }
    },

    // NEW POST
    createPost: async function (req, res) {



        try {
           

                const newPost = new Post({
                    title: req.body.title,
                    body: req.body.body,
                    tags: req.body.tags,
                    user: req.user
                })

                await newPost.save();

                res.status(201).send({ msg: "created", newPost })


            } catch (error) {
                res.status(500).send({ msg: "Server error" + error.message })
            }

        }
}