const jwt = require('jsonwebtoken')

const verifyLoginState = (req,res,next) => {
    const token = req.cookies.user_auth

    if (!token) return res.redirect('/login?redirect')

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.redirect('/login?redirect')
        next()
    })
}

module.exports = verifyLoginState
