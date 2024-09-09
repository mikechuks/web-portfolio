const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const updateAdminController = require('../controllers/updateAdminController');
const addAdminController = require('../controllers/addAdminController');

router.post('/register', userController.register);


module.exports = router;