const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} = require('../controllers/userController');

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Forgot password
router.post('/forgot-password', forgotPassword);

// Reset password
router.put('/reset-password/:token', resetPassword);

module.exports = router;