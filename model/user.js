// create user collection
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    // 0 -> able
    // 1 -> unable
    state: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('User', userSchema);

// User.create({
//     username: 'Harryharries',
//     email: 'harry.guapi@gmail.com',
//     password: 'QWER1234',
//     role: 'admin',
//     state: 0
// }).then((user) => {
//     console.log('Created a New User: ' + user)
// }).catch(() => {
//     console.log('fail to created')
// })

module.exports = {
    User
}