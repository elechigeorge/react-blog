const router = require('express').Router();
const { getPosts, createPost } = require('../controller/post')


// GET POSTS
// FETCH ALL RESOURCES
router.get('/', getPosts)
router.post('/', createPost)


module.exports = router;