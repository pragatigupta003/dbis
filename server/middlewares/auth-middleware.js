const passport = require('passport')

exports.userAuth =
    passport.authenticate('local', {
        failureRedirect: '/login',
        failWithError: true,
        successRedirect: '/home'
    });
