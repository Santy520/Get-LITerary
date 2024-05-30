const db = require('../config/connection');
const seedBooks = require('./seedBooks');
const seedClubs = require('./seedClubs');
const seedDiscussions = require('./seedDiscussions');
const seedUsers = require('./seedUsers');

// Define a main function to run all seeders
const main = async () => {
    try {
        // Connect to the MongoDB database
        await db;

        // Call individual seeder functions
        await seedBooks();
        await seedClubs();
        await seedDiscussions();
        await seedUsers();

        console.log('Database seeding completed successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Close the database connection after seeding
        db.close();
    }
};

main();