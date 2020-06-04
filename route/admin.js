const express = require('express');

const bcrypt = require('bcrypt');

//import user collection constructor
const { User } = require('../model/user')

const admin = express.Router();

admin.get('/login', (req, res) => {
    res.render('admin/login')
});

admin.post('/login', async(req, res) => {
    // recevie request param
    //res.send(req.body)
    const { email, password } = req.body;
    // if there is no entered email:
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).send('<h4>email address or password error</h4>');
        //alert("email address or password can not be empty");
        //return false
    }

    let user = await User.findOne({ email: email })

    if (user) {
        //after email matched: check password after encryption
        let passwordCheck = await bcrypt.compare(password, user.password);
        if (passwordCheck) {
            res.send("login success")
        } else {
            return res.status(400).render('admin/error', { msg: "password error, will return to login in 2s" })
        }
    } else {
        return res.status(400).render('admin/error', { msg: "email address error, will return to login in 2s" })
    }
})

admin.get('/user', (req, res) => {
    res.render('admin/user')
});

module.exports = admin;