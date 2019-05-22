mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: {
        userName: String,
        email: {
            type: String,
        },
        name: {
            firstName: {
                type: String,
            },
            lastName: {
                type: String,
            }    
        }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
