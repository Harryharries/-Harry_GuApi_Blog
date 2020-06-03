const express = require('express');

//body-parser to handle post request param
const bodyPasrser = require('body-parser');

//path handling
const path = require('path');
//create server
const app = express();

require('./model/connect')

app.use(bodyPasrser.urlencoded({ extended: false }))

//require('./model/user')

// tell express where is the tamplate
app.set('views', path.join(__dirname, 'views'))
    // tell express where is the default place
app.set('view engine', 'art');
// define the tamplate engine
app.engine('art', require('express-art-template'));

//use static resource all of resource is in the dir
app.use(express.static(path.join(__dirname, 'public')));

const home = require('./route/home');
const admin = require('./route/admin');

app.use('/home', home);
app.use('/admin', admin);

//since  80 is default
app.listen(80)
console.log("open service, please go to localhost in browser")