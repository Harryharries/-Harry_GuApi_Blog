// create user collection
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

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

async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('QWER1234', salt);

    const user = await User.create({
        username: 'Harryharries',
        email: 'harry.guapi@gmail.com',
        password: pass,
        role: 'admin',
        state: 0
    })
}

//createUser();

module.exports = {
    User
}