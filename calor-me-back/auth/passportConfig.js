const existingUser = require('../models/userModel');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    passport.use(
        new LocalStrategy((username, password, done) => {
            existingUser.findOne({ username: username }, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    });
    passport.deserializeUser((id, cb) => {
        existingUser.findOne({ _id: id }, (err, user) => {
            cb(err, user);
        })
    })
}
