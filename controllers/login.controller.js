const User = require('../models/User')
const createToken = require('../helpers/createToken')
const handleErrors = require('../helpers/handleErrors')


module.exports.get = (req,res) => {
    if (req.query.hasOwnProperty('redirect')) res.locals.redirected = true
    res.render('login.html', { req, data: res.locals })
}
module.exports.post = async (req,res) => {
    const { username,password } = req.body
    
    try {
        const user = await User.matchUserCredentials(username,password)
        const token = createToken(user._id)
        res.cookie('user_auth', token, { httpOnly: true , maxAge: 1000 * 60 * 60 })
        res.status(201)
        if (req.query.hasOwnProperty('redirect')) return res.redirect('/secret-area')
        res.redirect('/')
    } 
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).render('login.html', { errors })
    }
}

