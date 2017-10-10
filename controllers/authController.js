const passport = require('passport')


// exports.login = (req, res, next) => {
//     console.log(req.body)
// }

exports.login = passport.authenticate('local', {
    failureRedirct: '/login',
    successRedirect: '/'
})