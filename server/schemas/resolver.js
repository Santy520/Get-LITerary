const { User, Book, Club, Topic, Post } = require('../models');
const { formatDate } = require('../utils/dateFormat');
const { AuthenticationError } = require('apollo-server-express');  // For handling authentication
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find({});
            } catch (err) {
                throw new Error('Error fetching users');
            }
        },
        books: async () => {
            try {
                const books = await Book.find({});
                return books.map(book => ({
                    ...book._doc,
                    formattedDate: formatDate(book.createdAt)
                }));
            } catch (err) {
                throw new Error('Error fetching books');
            }
        },
        clubs: async () => {
            try {
                return await Club.find({});
            } catch (err) {
                throw new Error('Error fetching clubs');
            }
        },
        topics: async () => { // Update to fetch topics
            try {
                return await Topic.find({});
            } catch (err) {
                throw new Error('Error fetching topics');
            }
        },
        book: async (parent, { id }) => {
            try {
                return await Book.findById(id);
            } catch (err) {
                throw new Error('Error fetching book');
            }
        },
        club: async (parent, { id }) => {
            try {
                return await Club.findById(id);
            } catch (err) {
                throw new Error('Error fetching club');
            }
        },
        user: async (parent, { id }) => {
            try {
                return await User.findById(id);
            } catch (err) {
                throw new Error('Error fetching user');
            }
        },
        topic: async (parent, { id }) => { // Add resolver for fetching a single topic
            try {
                return await Topic.findById(id);
            } catch (err) {
                throw new Error('Error fetching topic');
            }
        },
    },
    Mutation: {
        // Update mutations for addUser, updateUser, deleteUser, addBook, updateBook, deleteBook, addClub, updateClub, deleteClub
        addUser: async (parent, { name, email, password }) => {
            try {
                const user = await User.create({ name, email, password });
                const token = signToken(user);
                return { token, user };
            } catch (err) {
                throw new Error('Error adding user: ' + err.message);
            }
        },
        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email });

                if (!user) {
                    throw new AuthenticationError('No user found with this email address.');
                }

                const correctPw = await user.isCorrectPassword(password);

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect password.');
                }

                const token = signToken(user);

                return { token, user };
            } catch (err) {
                throw new Error('Error logging in: ' + err.message);
            }
        },
        updateUser: async (parent, { id, ...args }) => {
            try {
                return await User.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating user');
            }
        },
        deleteUser: async (parent, { id }) => {
            try {
                return await User.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting user');
            }
        },
        addBook: async (parent, args) => {
            try {
                const book = new Book(args);
                return await book.save();
            } catch (err) {
                throw new Error('Error adding book');
            }
        },
        updateBook: async (parent, { id, ...args }) => {
            try {
                return await Book.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating book');
            }
        },
        deleteBook: async (parent, { id }) => {
            try {
                return await Book.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting book');
            }
        },
        addClub: async (parent, args) => {
            try {
                const club = new Club(args);
                return await club.save();
            } catch (err) {
                throw new Error('Error adding club');
            }
        },
        updateClub: async (parent, { id, ...args }) => {
            try {
                return await Club.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating club');
            }
        },
        deleteClub: async (parent, { id }) => {
            try {
                return await Club.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting club');
            }
        },
        addTopic: async (parent, args) => {
            try {
                const topic = new Topic(args);
                return await topic.save();
            } catch (err) {
                throw new Error('Error adding topic');
            }
        },
        updateTopic: async (parent, { id, ...args }) => {
            try {
                return await Topic.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating topic');
            }
        },
        deleteTopic: async (parent, { id }) => {
            try {
                return await Topic.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting topic');
            }
        },
        addPost: async (parent, args) => {
            try {
                const post = new Post(args);
                return await post.save();
            } catch (err) {
                throw new Error('Error adding post');
            }
        },
        updatePost: async (parent, { id, ...args }) => {
            try {
                return await Post.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating post');
            }
        },
        deletePost: async (parent, { id }) => {
            try {
                return await Post.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting post');
            }
        },
    },
};

module.exports = resolvers;
