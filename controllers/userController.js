const User = require('../models/User')
const mongoose = require('mongoose')
const promisify = require('es6-promisify')
const passport = require('passport')

exports.showRegister = (req, res, next) => {
    res.render('register')
}

exports.registerUser = async (req, res, next) => {
    debugger
    const user = new User({ email: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address })
    const register = promisify(User.register, User)
    // user.save().catch(error => console.log(error));
    await register(user, req.body.password).catch('test2')
    next()
}

// exports.login = (req, res, next) => {
//     res.render('login', { title: 'Login', firstName: req.body.firstName })
// }

exports.login = passport.authenticate('local', {
    failureRedirct: '/login',
    successRedirect: '/'
})