const User = require('../models/User')

module.exports.get = (req,res) => {
    res.render('index.html', { req, data: res.locals })
}