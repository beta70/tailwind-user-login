const jwt = require('jsonwebtoken')

const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 60 * 60
    })
}

module.exports = createToken