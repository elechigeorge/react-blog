const router = require('express').Router();
const { createUser } = require('../controller/user')


// USER AUTHENTICATION ROUTES
router.post('/register', createUser)


module.exports = router;