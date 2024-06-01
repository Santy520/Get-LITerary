const express = require('express');
const router = express.Router();

const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

// Use the book and user routes
router.use('/books', bookRoutes);
router.use('/users', userRoutes);

module.exports = router;
