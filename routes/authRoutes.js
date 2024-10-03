const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/authMiddlewere');
const authControl = require('../controllers/authcontroller');

const { registerValidator, loginValidator } = require('../helpers/validator');

routes.post('/register', registerValidator, authControl.registerUser);
routes.post('/login', loginValidator, authControl.loginUser);

// profile
routes.get('/profile', auth, authControl.getProfile);
routes.put('/updateProfile', auth, authControl.UpdateProfile);

module.exports = routes;