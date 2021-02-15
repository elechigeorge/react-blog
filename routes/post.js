const router = require('express').Router();
const { getPosts, createPost, getPost } = require('../controller/post')


// GET POSTS
// FETCH ALL RESOURCES
router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/', createPost)


module.exports = router;