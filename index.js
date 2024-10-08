require('dotenv').config;
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/PDMS_App");

const express = require('express');
const app = express();
const path = require('path');
const cookie = require('cookie-parser');
const passport = require('passport');
const passLocal = require('./middlewares/passwpord_loc');
const session = require('express-session');

app.use(express.json());
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

app.use(cookie());

app.use(session({
    name: 'rnw',
    secret: 'rnw',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 100,
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuth);

// authentication
const authRoute = require('./routes/authRoutes');
app.use('/api', authRoute);

const port = process.env.SERVER_PORT | 8001

app.listen(port, ()=>{
    console.log('server is runnig on port :- '+port);
});