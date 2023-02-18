const jwt = require('jsonwebtoken')
const User = require('../models/User');

const mapUserData = (req, res, next) => {
    const token = req.cookies.user_auth

    if (!token) return next()

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
        if (err) {
            return next()
        }

        const userData = await User.findById(decoded.id).exec()
        res.locals.username = userData.username
        next()
    })
}

module.exports = mapUserData