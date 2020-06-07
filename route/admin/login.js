const bcrypt = require('bcrypt');
//import user collection constructor
const { User } = require('../../model/user');

module.exports = async(req, res) => {
    // recevie request param
    //res.send(req.body)
    const { email, password } = req.body;
    // if there is no entered email:
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).send('<h4>email address or password error</h4>');
        //alert("email address or password can not be empty");
        //return false
    }

    let user = await User.findOne({ email: email })

    if (user) {
        //after email matched: check password after encryption
        let passwordCheck = await bcrypt.compare(password, user.password);
        if (passwordCheck) {
            //"login success"
            //pass the user name to list
            req.session.username = user.username;

            req.app.locals.userInfo = user;
            // to new page
            res.redirect('/admin/user');

        } else {
            return res.status(400).render('admin/error', { msg: "password error, will return to login in 2s" })
        }
    } else {
        return res.status(400).render('admin/error', { msg: "email address error, will return to login in 2s" })
    }
}