const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const auth = require('../middleware/auth');


// Authentication routes
router.post('/register', userController.registerUser); // Register
router.post('/login', userController.loginUser); // Login

// Protected routes
router.post('/users/logout', auth, userController.logoutUser); // Logout
router.get('/users', auth, userController.getAllUsers); // Get all users
router.get('/users/:id', auth, userController.getUserById); // Get user by ID
router.patch('/users/:id', auth, userController.updateUser); // Update user by ID
router.delete('/users/:id', auth, userController.deleteUser); // Delete user by ID


module.exports = router;