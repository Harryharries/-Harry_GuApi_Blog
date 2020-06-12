const { Article } = require('../../model/article');

module.exports = async(req, res) => {
    let result = await Article.find().populate('author');

    res.send(result)

    return;

    res.render('home/default.art')
}