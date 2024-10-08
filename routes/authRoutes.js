const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/authMiddlewere');
const authControl = require('../controllers/authcontroller');
const passport = require('passport');

const { registerValidator, loginValidator } = require('../helpers/validator');

routes.post('/register', registerValidator, authControl.registerUser);
routes.post('/login', loginValidator, authControl.loginUser);

// profile
routes.get('/profile', auth, authControl.getProfile);
routes.put('/updateProfile', auth, authControl.UpdateProfile);


// forget password
routes.get('/CheckEmail', authControl.CheckEmail);
routes.post('/emailCheck', authControl.emailCheck);
routes.get('/otpCheck', authControl.otpCheck);
routes.post('/otpEmail', authControl.otpEmail);
routes.post('/NewPass', authControl.NewPass);


module.exports = routes;