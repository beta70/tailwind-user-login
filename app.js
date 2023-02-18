const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const nunjucks = require('nunjucks')
const cookieParser = require('cookie-parser')
const mapUserData = require('./middleware/mapUserData')
const dotenv = require('dotenv').config()

const indexRouter = require('./routes/index.js')
const restrictedRouter = require('./routes/restricted.js')
const registerRouter = require('./routes/register.js')
const loginRouter = require('./routes/login.js')
const logoutRouter = require('./routes/logout.js')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('*', mapUserData)
app.use('/', indexRouter)
app.use('/secret-area', restrictedRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,  
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.log(err);
})
mongoose.set('strictQuery', true)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})