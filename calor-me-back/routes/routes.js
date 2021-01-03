const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel');

router.post('/signup', (request, response) => {
    const signUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        email: request.body.email,
        userName: request.body.userName,
        password: request.body.password
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