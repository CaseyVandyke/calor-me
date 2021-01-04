const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel');
const bcrypt = require('bcrypt');

router.post('/signup', (request, response) => {

(async function () {

    const salt = await bcrypt.genSalt(10);

    // hash the password along with our new salt
    const hash = await bcrypt.hash(request.body.password, salt);
    return hash;
    })().then((data)=>{
        const txtPassword = data;
        const newUser = new signUpTemplateCopy({
            fullName: request.body.fullName,
            email: request.body.email,
            userName: request.body.userName,
            password: txtPassword,
        });
    newUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})
})










module.exports = router;