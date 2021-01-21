const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const passport = require('passport');

//Register Page
router.post('/register', (req, res) => {

    (async function (err, doc) {
        if (err) throw err;
        if (doc) res.send("User already exists");
        const salt = await bcrypt.genSalt(10);

        // hash the password along with our new salt
        const hash = await bcrypt.hash(req.body.password, salt);
        return hash;
    })().then((data) => {
        const txtPassword = data;
        const newUser = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            username: req.body.username,
            password: txtPassword
        });
        newUser.save()
            .then(data => {
                res.send("User Created");
                res.json(data)
            })
            .catch(error => {
                res.json(error)
            })
    })
})

//Login Page
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, existingUser, info) => {
        if (err) throw err;
        if (!existingUser) res.send('No User Exists');
        else {
            req.login(existingUser, err => {
                if (err) throw err;
                res.send('Successfully Authenticated');
            });
        }
    })(req, res, next);
})

router.get('/user', (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
})

module.exports = router;