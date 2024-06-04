// Import required modules
const mongoose = require('mongoose');
const db = require('../config/connection');
const { Book, Club, User } = require('../models');
const cleanDb = require('./cleanDb');
// const bcrypt = require('bcrypt');

// Import seeds from JSON files
 const usersSeeds = require('./usersSeeds.json');
 const clubSeeds = require('./clubSeeds.json');
 const bookSeeds = require('./bookSeeds.json');
 
// Define a main function to run all seeders
db.once('open', async () => {
    try {
      await cleanDb('User', 'Users');
      await cleanDb('Book', 'Books');
      await cleanDb('Club', 'Clubs');

    // Insert users without password hashing -- hashing for login, this is to check if we can seed!
    // 🧁   ADD PASSWORD HASHING (stretch goalz) 🧁

    await User.insertMany(usersSeeds);

    // // Insert other seed data
    await Book.insertMany(bookSeeds);
    await Club.insertMany(clubSeeds);

    console.log('all done!');
    process.exit(0);
    
} catch (err) {
    console.error(err);
    process.exit(1);
}
  });
  