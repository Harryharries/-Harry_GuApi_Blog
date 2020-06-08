//create article entity

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 40,
        minlength: 2,
        required: [true, 'please give a title']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'please give the author name']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
});

// create 
const Article = mongoose.model('Article', articleSchema);

module.exports = {
    Article
}