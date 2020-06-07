const bcrypt = require('bcrypt');

const { User, validateUser } = require('../../model/user')

module.exports = async(req, res, next) => {

    try {
        await validateUser(req.body)
    } catch (e) {
        //invaild!
        //return res.redirect(`/admin/user-edit?message=${e.message}`)
        //JSON.stringify() 

        return next(JSON.stringify({ path: '/admin/user-edit', message: e.message }))
    }

    let user = await User.findOne({ email: req.body.email })

    //if the user is exist already, so do not regsiter again
    if (user) {
        return next(JSON.stringify({ path: '/admin/user-edit', message: 'your email have been registered' }))
            //return res.redirect(`/admin/user-edit?message=your email have been registered`)
    }

    //password encryption
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt)

    req.body.password = password;

    await User.create(req.body);
    res.redirect('/admin/user')
}