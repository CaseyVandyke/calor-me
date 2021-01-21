const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;

const app = express();
const routePath = require('./routers/registerRouter');
const loginPath = require('./routers/loginRouter')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    () => {
        console.log('mongoose is connected');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000", // >-- location of the react app were connecting to
    credentials: true
}));

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require('./auth/passportConfig')(passport);

app.use('/app', routePath);
app.use('/app', loginPath);
app.listen(4000, () => console.log("server is up and running"));

module.exports = app;