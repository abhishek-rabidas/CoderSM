const express = require('express');

const router = express.Router(); //Acquiring the methods of Express Router

const userCtrl = require('../controllers/users_controller'); //Requiring user_controller

router.get('/profile', userCtrl.profile); //Sending response for the GET request using Express Router

module.exports = router; //making this available outside the module