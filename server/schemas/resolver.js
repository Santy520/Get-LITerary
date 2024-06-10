const { User, Book, Club, Topic, Post } = require('../models');
const { formatDate } = require('../utils/dateFormat');
const { AuthenticationError } = require('apollo-server-express');  // For handling authentication
const { signToken } = require('../utils/auth');
const { authMiddleware } = require('../utils/auth'); // Ensure the path matches the actual file casing
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resolvers = {
    Query: {
        // GET ALL USERS
        users: async () => {
            try {
                return await User.find({});
            } catch (err) {
                throw new Error('Error fetching users');
            }
        },

        me: async (parent, { token }) => { 
      
            const decodedToken = jwt.decode(token, { complete: true });
          const userId = decodedToken.payload.data._id;
            console.log("checking get route", userId) 
            
            const user = await User.findOne({ _id: userId });
            console.log("book data", user)
          return user;
            
          },

        // GET ALL BOOKS
        books: async () => {
            try {
                return await Book.find({});
            } catch (err) {
                throw new Error('Error fetching books');
            }
        },

        // GET ALL CLUBS
        clubs: async () => {
            try {
                return await Club.find({});
            } catch (err) {
                throw new Error('Error fetching clubs');
            }
        },

        // GET ALL TOPICS
        topics: async () => {
            return await Topic.find();
            // return [
            //     {
            //         _id: '1',
            //         title: 'Topic 1',
            //         clubId: { _id: '1', name: 'Club 1' },
            //         bookId: { _id: '1', title: 'Book 1' },
            //     },
            //     // other topics
            // ];
        },

        // GET ALL POSTS
        posts: async () => { // Update to fetch posts
            try {
                console.log("getting all posts:");
                const getAllPosts = await Post.find({});
                console.log(getAllPosts);
                return getAllPosts;
            } catch (err) {
                console.log("seeing an error", err);
                throw new Error('Error fetching posts');
            }
        },

        // GET BOOK BY ID
        book: async (parent, { id }) => {
            try {
                return await Book.findById(id);
            } catch (err) {
                throw new Error('Error fetching book');
            }
        },

        // GET CLUB BY ID
        club: async (parent, { id }) => {
            try {
                return await Club.findById(id);
            } catch (err) {
                throw new Error('Error fetching club');
            }
        },

        // GET USER BY ID
        user: async (parent, { id }) => {
            try {
                return await User.findById(id);
            } catch (err) {
                throw new Error('Error fetching user');
            }
        },

        // GET TOPIC BY ID
        topic: async (parent, { id }) => { // Add resolver for fetching a single topic
            try {
                return await Topic.findById(id);
            } catch (err) {
                throw new Error('Error fetching topic');
            }
        },

        // GET POST BY ID
        post: async (parent, { id }) => {
            try {
                return await Post.findById(id);
            } catch (err) {
                throw new Error('Error fetching post');
            }
        },
    },

    Mutation: {
        // ADD USER 🐙 to do : make sure this hashes passwords! add error handling, debugging, defensive code
        addUser: async (parent, { name, email, password }) => {
            try {
                const user = await User.create({ name, email, password });
                // console.log("User created:", user)
                const token = signToken(user);
                // Return token and user
                return { token, user };
            } catch (err) {
                // Log error
                console.error('Error adding user:', err);
                // Throw error with custom message
                throw new Error('Error adding user: ' + err.message);
            }
        },

        // LOGIN 🐙 - to do : make sure this can handle hashed passwords
        login: async (parent, { email, password }) => {
            try {
                console.log(email, password);
                // Find user by email
                const user = await User.findOne({ email });
                console.log(user);
                // If user not found, throw AuthenticationError
                if (!user) {
                    throw new AuthenticationError('No user found with this email address.');
                }

                // Check if password is correct
                // const correctPw = await bcrypt.compare(password, user.password);
                console.log(user.password);
                console.log(password);
                // If password is incorrect, throw AuthenticationError
                // if (!correctPw) {
                //     throw new AuthenticationError('Incorrect password.');
                // }

                // Log successful login
                console.log("User logged in:", user);

                // Generate token
                const token = signToken(user);
                console.log(token);
                // Return token and user
                return { token, user };
            } catch (err) {
                // Log error
                console.error('Error logging in:', err);

                // Throw error with custom message
                throw new Error('Error logging in: ' + err.message);
            }
        },

        // UPDATE USER
        updateUser: async (parent, { id, ...args }) => {
            try {
                return await User.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating user');
            }
        },

        // DELETE USER
        deleteUser: async (parent, { id }) => {
            try {
                return await User.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting user');
            }
        },

        // ADD BOOK
        addBook: async (parent, args) => {
            try {
                const book = new Book(args);
                return await book.save();
            } catch (err) {
                throw new Error('Error adding book');
            }
        },

        // UPDATE BOOK
        updateBook: async (parent, { id, ...args }) => {
            try {
                return await Book.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating book');
            }
        },

        // DELETE BOOK
        deleteBook: async (parent, { id }) => {
            try {
                return await Book.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting book');
            }
        },

        // ADD CLUB
        addClub: async (parent, args) => {
            try {
                const club = new Club(args);
                return await club.save();
            } catch (err) {
                throw new Error('Error adding club');
            }
        },

        // UPDATE CLUB
        updateClub: async (parent, { id, ...args }) => {
            try {
                return await Club.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating club');
            }
        },

        // DELETE CLUB
        deleteClub: async (parent, { id }) => {
            try {
                return await Club.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting club');
            }
        },

        // ADD TOPIC
        addTopic: async (parent, args) => {
            try {
                const topic = await Topic.create(args);
                console.log("The topic object is:", topic);
                return topic;
            } catch (err) {
                console.error('Error adding topic:', err);
                throw new Error('Error adding topic: ' + err.message);
            }
        },

        // UPDATE TOPIC
        updateTopic: async (parent, { id, ...args }) => {
            try {
                return await Topic.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating topic');
            }
        },

        // DELETE TOPIC
        deleteTopic: async (parent, { id }) => {
            try {
                return await Topic.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting topic');
            }
        },

        // ADD POST
        addPost: async (parent, args, context) => {
            try {
                // Debugging logs
                console.log("Received addPost arguments:", args);

                // Destructure arguments
                const { topicId, content } = args;

                // Ensure topicId is provided
                if (!topicId) {
                    throw new Error('topicId is required');
                }

                // Validate topicId
                const topic = await Topic.findById(topicId);
                if (!topic) {
                    throw new Error(`No topic found with ID: ${topicId}`);
                }

                // Validate authorId
                // const author = await User.findById(authorId);
                // if (!author) {
                //     throw new Error(`No author found with ID: ${authorId}`);
                // }

                // Create and save the post
                const post = new Post({
                    topicId,
                    authorId: context.user?._id ? context.user?._id : "665e215946e13a1e4a9b8c07",
                    content
                });
                await post.save();

                topic.posts.push(post._id)
                await topic.save();

                // Debugging logs
                console.log("Post created successfully:", post);

                return post;
            } catch (err) {
                console.error('Error adding post:', err);
                throw new Error('Error adding post: ' + err.message);
            }
        },

        // UPDATE POST
        updatePost: async (parent, { id, ...args }) => {
            try {
                return await Post.findByIdAndUpdate(id, args, { new: true });
            } catch (err) {
                throw new Error('Error updating post');
            }
        },

        // DELETE POST
        deletePost: async (parent, { id }) => {
            try {
                return await Post.findByIdAndDelete(id);
            } catch (err) {
                throw new Error('Error deleting post');
            }
        },
    },

    Topic: { // 🟢 Adding the Topic resolver here
        clubId: async (parent) => {
            return await Club.findById(parent.clubId);
        },
        authorId: async (parent) => {
            return await User.findById(parent.authorId);
        },
        bookId: async (parent) => {
            if (parent.bookId) {
                const book = await Book.findById(parent.bookId);
                if (!book) {
                    throw new Error(`Book with ID ${parent.bookId} not found`);
                }
                return book;
            }
            return null;
        },
        posts: async (parent) => {
            return await Post.find({ _id: { $in: parent.posts } });
        },
    },

    Post: { // 🟢 Adding the Post resolver here
        topicId: async (parent) => {
            return await Topic.findById(parent.topicId);
        },
        authorId: async (parent) => {
            return await User.findById(parent.authorId);
        },
    },
};

module.exports = resolvers;