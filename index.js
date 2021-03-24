const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')



// middleware setup
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cors())
// API ROUTES
server.use('/post', require('./routes/post.js'));
server.use('/account', require('./routes/user.js'))

// database connection 
mongoose
    .connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => server.listen(process.env.PORT, () => console.log('Server Instance connected...')))
    .catch((error) => console.log('connection lost due to' + error.message))