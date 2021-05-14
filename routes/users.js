const express = require('express');

const router = express.Router(); //Acquiring the methods of Express Router

const userCtrl = require('../controllers/users_controller'); //Requiring user_controller

//Sending responses for the GET request using Express Router
router.get('/profile', userCtrl.profile);
router.get('/signup', userCtrl.signup);
router.get('/signin', userCtrl.signin);

module.exports = router; //making this available outside the module