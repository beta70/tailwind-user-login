module.exports.get = (req,res) => {
    res.clearCookie('user_auth').redirect('/')
}

