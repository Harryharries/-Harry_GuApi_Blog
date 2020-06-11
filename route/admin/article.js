const { Article } = require('../../model/article')

const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {

    const page = req.query.page;

    req.app.locals.currentLink = 'article';

    //mongoose-sex-page
    //page decide current page
    //size decide every page's document number
    //display decide how many page number show in client 
    //exec : send query request to db
    let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();

    //res.send(articles);

    res.render('admin/article.art', {
        articles: articles
    });
}