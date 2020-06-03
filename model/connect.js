const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("database connected!"))
    .catch(() => console.log("database can not reach!"))