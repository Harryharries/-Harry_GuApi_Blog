const { User } = require('../../model/user')

module.exports = async(req, res) => {

    req.app.locals.currentLink = 'user';

    //get id in addresss
    const { message, id } = req.query;

    if (id) {
        //modify user 
        let user = await User.findOne({ _id: id });

        res.render('admin/user-edit', {
            message: message,
            user: user,
            link: '/admin/user-modify?id=' + id,
            button: 'update'
        })
        return;
    } else {
        //create user
        res.render('admin/user-edit', {
            message: message,
            link: '/admin/user-edit',
            button: 'create'
        })
    }

}