mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: {
                type: Number,
            },
            lng: {
                type: Number,
            }    
        }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
