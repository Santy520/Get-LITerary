const express = require('express');
const router = express.Router();

const bookRoutes = require('./bookRoutes');

// Use the book routes
router.use('/books', bookRoutes);

module.exports = router;
