const express = require('express');
const router = express.Router();
const existingUser = require('../models/userModel');
const bcrypt = require('bcrypt');
const passport = require('passport');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, existingUser, info) => {
        console.log(existingUser);
        if (err) throw err;
        if (!existingUser) res.send('No User Exists');
        else {
            req.login(existingUser, err => {
                if (err) throw err;
                res.send('Successfully Authenticated');
                console.log(req.existingUser)
            });
        }
    })(req, res, next);
})

router.get('/getUser', (req, res) => {

})

module.exports = router;