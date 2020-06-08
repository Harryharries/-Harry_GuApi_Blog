const express = require('express');

const admin = express.Router();

admin.get('/login', require('./admin/loginPage'));

//login
admin.post('/login', require('./admin/login'))

//user route 
admin.get('/user', require('./admin/userPage'));

admin.get('/logout', require('./admin/logout'));

admin.get('/user-edit', require('./admin/user-edit'))

admin.post('/user-edit', require('./admin/user-edit-fn.js'))

admin.post('/user-modify', require('./admin/user-modify'))

admin.get('/delete', require('./admin/user-delete'))

//article list page
admin.get('/article', require('./admin/article'));

//article edit page
admin.get('/article-edit', require('./admin/article-edit'));

//article add feature
admin.post('/article-add', require('./admin/article-add'))

module.exports = admin;