const { User } = require('../../model/user');

module.exports = async(req, res) => {
    let page = req.query.page || 1;

    let pagesize = 10;

    let count = await User.countDocuments({})

    let total = Math.ceil(count / pagesize);

    let start = (page - 1) * pagesize;

    let users = await User.find({}).limit(pagesize).skip(start)

    // res.send('There is ' + count + ' users')
    // return;

    res.render('admin/user', {
        users: users,
        page: page,
        total: total,
        msg: req.session.username
    });
}