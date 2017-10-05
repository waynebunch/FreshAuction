const express = require('express')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const userController = require('./controllers/userController')
const passport = require('passport')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
require('./handlers/passport')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'fucknut Sally',
    key: 'fucktard Drew',
    resave: false,
    saveUninitialized: false
}))

mongoose.connect('mongodb://localhost/freshauction', {
    useMongoClient: true
})

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.render('index', { user: req.user })
})

app.get('/register', userController.showRegister)
app.post('/register', userController.registerUser, userController.login)
//make a route app.post('/register', userController) that will post to register.pug and send info there

app.get('/login', userController.login)

app.listen(8080, () => {
    console.log('Server is running');
})