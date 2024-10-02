const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/authMiddlewere');
const authControl = require('../controllers/authcontroller');

const { registerValidator, loginValidator } = require('../helpers/validator');

routes.post('/register', registerValidator, authControl.registerUser);
routes.post('/login', loginValidator, authControl.loginUser);

module.exports = routes;