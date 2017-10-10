const User = require('../models/User')
const mongoose = require('mongoose')
const promisify = require('es6-promisify')
const passport = require('passport')

exports.showRegister = (req, res, next) => {
    res.render('register')
}

exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name')
    req.checkBody('firstName', 'You must supply a first name').notEmpty()
    req.checkBody('lastName', 'You must supply a last name').notEmpty()
    req.checkBody('email', 'You must supply a valid email').isEmail()
    req.sanitizeBody('email').normalizeEmail({
        gmail_remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    })
    req.checkBody('password', 'Password cannot be blank').notEmpty()
    req.checkBody('password-confirm', 'Confirmed password cannot be blank').notEmpty()
    req.checkBody('password-confirm', 'Passwords did not match').equals(req.body.password)

    const errors = req.validationErrors();
    if (errors) {
        req.flash('error', errors.map(err => err.msg))
        res.render('register', { title: 'Register', body: req.body, flashes: req.flash() })
        return
    }
    next()
}

exports.registerUser = async (req, res, next) => {
    debugger
    const user = new User({ email: req.body.email, firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address })
    const register = promisify(User.register, User)
    await register(user, req.body.password).catch(err => console.log(err))
    next()
}


