const mongoose = require('mongoose');
const User = require('./user.js');
const Post = require('./posts.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/schoolprojec"

const connectDb = () => {
    return mongoose.connect(uri);
}

module.exports = {
    connectDb,
    models: {
        User,
        Post
    }
}