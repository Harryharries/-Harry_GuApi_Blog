const { User } = require('../../model/user')
const bcrypt = require('bcrypt');

module.exports = async(req, res, next) => {
    //res.send('ok');
    //receive the value from client
    const { username, email, role, state, password } = req.body;
    const id = req.query.id;

    let user = await User.findOne({ _id: id });

    const isVaild = await bcrypt.compare(req.body.password, user.password)

    //compare passwords
    if (isVaild) {
        User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        })
        res.redirect('/admin/user')
    } else {
        let obj = { path: '/admin/user-edit', message: 'password comparsion fail', id: id }
        next(JSON.stringify(obj));
    }

}