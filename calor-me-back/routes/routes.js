const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel');
const bcrypt = require('bcrypt');

router.post('/signup', (request, response) => {

const saltPassword = await bcrypt.genSalt(10);
const securePassword = await bcrypt.hash(request.body.password, saltPassword);

const signUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    email: request.body.email,
    userName: request.body.userName,
    password: securePassword
})
    signUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})








module.exports = router;