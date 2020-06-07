// create user collection
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const joi = require('joi');

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

//validate user info
const validateUser = user => {
    const schema = {
        username: joi.string().min(2).max(15).required().error(new Error('your username length should be 3~14')),
        email: joi.string().email().error(new Error("your email is not correct")),
        //using regex to vaildate a password
        password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('your password length should be 4~29')),
        role: joi.string().valid('normal', 'admin').required().error(new Error('INVAILD ROLE!')),
        state: joi.number().valid(0, 1).error(new Error('INVAILD STATE!'))
    };
    //vaildating!
    return joi.validate(user, schema)

}

module.exports = {
    User,
    validateUser
}