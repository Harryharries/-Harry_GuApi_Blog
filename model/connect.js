const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("database connected!"))
    .catch(() => console.log("database can not reach!"))