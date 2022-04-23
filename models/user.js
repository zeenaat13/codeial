const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passward: {
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},{
    timjestamps: true
});


const User = mongoose.model('User',userSchema);

module.exports = User;