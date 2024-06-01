const express = require('express');
const router = express.Router();
const { 
    registerUser, 
    loginUser, 
    getUser 
} = require('../controllers/userController');
// const authMiddleware = require('../middleware/authMiddleware');

// Define routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', authMiddleware, getUser);

module.exports = router;
