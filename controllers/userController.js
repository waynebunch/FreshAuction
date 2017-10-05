const User = require('../models/User')
const mongoose = require('mongoose')

exports.showRegister = (req, res, next) => {
    res.render('register')
}


// exports.createUser = (req, res, next) => {
//   const wayne = new User({
//     username: 'Wayne',
//     firstName: 'Wayne',
//     lastName: 'Bunch',
//     address: '3977',
//   })

//   wayne.save(err => {
//     if (err) console.log('Fucked')
//   })

//   res.render('index', { title: 'Welcome to Shit Creek', message: 'Name should be saved!'})
// }

//need to make this a function taht is called
