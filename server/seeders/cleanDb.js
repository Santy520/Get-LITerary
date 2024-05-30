// import models
const Book = require('../models/Book');
const Club = require('../models/Club');
const Discussion = require('../models/Discussion');
const User = require('../models/User');

const cleanDB = async () => {
    try {
        // Clear existing data from all collections
        await Promise.all([
            Book.deleteMany(),
            Club.deleteMany(),
            Discussion.deleteMany(),
            User.deleteMany()
        ]);
        
        console.log('Database cleaned successfully');
    } catch (error) {
        console.error('Error cleaning database:', error);
    }
};

module.exports = cleanDB;
