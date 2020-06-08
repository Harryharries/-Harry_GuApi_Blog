const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article')

module.exports = (req, res) => {
    //1. create form to parse obj
    const form = new formidable.IncomingForm();
    //2. uploaded file's position
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    //3. save the file post
    form.keepExtensions = true;
    //4 parse
    form.parse(req, async(err, fields, files) => {
            //1.fields is normal info
            //2. files : obj contains the location.... of the updated file
            //res.send(files.cover.path.split('public')[1])
            await Article.create({
                title: fields.title,
                author: fields.author,
                publishDate: fields.publishDate,
                cover: files.cover.path.split('public')[1],
                content: fields.content,
            });
            res.redirect('/admin/article');

        })
        //res.send('ok');
}