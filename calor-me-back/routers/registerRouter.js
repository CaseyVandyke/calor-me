const express = require('express');
const router = express.Router();
const User = require('../models/SignUpModel');
const bcrypt = require('bcrypt');


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
                res.json(data)
            })
            .catch(error => {
                res.json(error)
            })
    })
})

module.exports = router;