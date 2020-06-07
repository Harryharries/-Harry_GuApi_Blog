const guard = (req, res, next) => {
    //decide is it login page?
    // decide is the user login?
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        next()
    }
}

module.exports = guard;