const User = require('../models/User')
const createToken = require('../helpers/createToken')
const handleErrors = require('../helpers/handleErrors')


module.exports.get = (req,res) => {
    res.render('register.html', { req, data: res.locals })
}
module.exports.post = async (req,res) => {
    const { username,password } = req.body
    
    try {
        const newUser = await User.create({ username, password })
        const token = createToken(newUser._id)
        res.cookie('user_auth', token, { httpOnly: true , maxAge: 1000 * 60 * 60 }).status(201).redirect('/')
    } 
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).render('register.html', { errors })
    }
}

