const { User } = require('../../model/user');

module.exports = async(req, res) => {
    //get delete id 
    //res.send(req.query.id)
    await User.findByIdAndDelete({ _id: req.query.id })
    res.redirect('/admin/user');
}