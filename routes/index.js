const express = require('express');

const router = express.Router(); //Acquiring the methods of Express Router

const homeCtrl = require('../controllers/home_controller'); //Requiring home_controller

router.get('/', homeCtrl.home); //Sending response for the GET request using Express Router
//Further mapping
router.use('/user', require('./users'));
router.use('/post', require('./posts'));


module.exports = router; //making this available outside the module