const express = require('express')
const router = express.Router()
const restrictedController = require('../controllers/restricted.controller')
const verifyLoginState = require('../middleware/verifyLoginState')

router.get('/', verifyLoginState, restrictedController.get)

module.exports = router