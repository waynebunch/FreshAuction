const express = require('express')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const userController = require('./controllers/userController')
const authController = require('./controllers/authController')
const passport = require('passport')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const expressValidator = require('express-validator')
const flash = require('connect-flash')
const helpers = require('./helpers')
const stylus = require('stylus')
const nib = require('nib')
require('./handlers/passport')
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {
    useMongoClient: true
})
const app = express()

app.use(stylus.middleware({
    src: path.join(__dirname, 'views'),
    dest: path.join(__dirname, 'public'),
    compile: (str, path, fn) => {
        style(str)
        .set('filename', path)
        .set('compress', true)
        .use(nib())
        .render(fn);
    }
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))  




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())
app.use(session({
    secret: process.env.SECRET, 
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false
}))


app.use(passport.initialize()) 
app.use(passport.session()) 
app.use(flash())

app.use((req, res, next) => {
    res.locals.h = helpers
    res.locals.flashes = req.flash()
    res.locals.user = req.user || null
    res.locals.currentPath = req.path
    next()
})

app.get('/', (req, res) => {
    res.render('index', { user: req.user, siteName: helpers.siteName, h: helpers })
})

app.get('/register', userController.showRegister)
app.post('/register', userController.validateRegister, userController.registerUser, authController.login)

app.get('/login', (req, res, next) => {
    res.render('login')
})
app.post('/login', authController.login)

app.listen(process.env.PORT, () => {

    console.log('Server is running');
})