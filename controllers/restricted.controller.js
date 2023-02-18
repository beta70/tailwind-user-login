module.exports.get = (req,res) => {
    res.render('secret-area.html', { req, data: res.locals })
}