const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/register', userController.register);

router.post('/login', userController.login);

router.post('/login2fa', userController.verify2FA);

router.post('/forgotPassword/', userController.forgotPasswordRequest);

router.post('/forgotPasswordSuccess/', userController.resetPassword);

router.get('/allUsers', userController.getAllUsers);

router.get('/:userId', userController.getUserById);

router.put('/adminUpdateUser/:userId/', userController.updateUserDetails);



module.exports = router;
