const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts_constroller');
const { route } = require('./users');

//Serving different GET requests using Express Router
router.get('/create', postCtrl.createPost);
router.get('/delete', postCtrl.deletePost);

module.exports = router;