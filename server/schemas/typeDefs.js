// 🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙🐙 check the add user and login for authentication issues
const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Book {
        _id: ID!
        title: String!
        author: String!
        summary: String
        clubs: [Club]
    }

    type Club {
        _id: ID!
        name: String!
        currentBook: Book
        pastBooks: [Book]
        members: [User]
        topics: [Topic]
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        clubs: [Club]
    }

    type Topic {
        _id: ID!
        clubId: Club!
        authorId: User!
        title: String! 
        bookId: Book!
        posts: [Post]
    }
    type Post {
        _id: ID!
        topicId: Topic!
        authorId: User!
        content: String!
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        books: [Book]
        book(id: ID!): Book
        clubs: [Club]
        club(id: ID!): Club
        users: [User]
        user(id: ID!): User
        me: User
        topics: [Topic]
        topic(id: ID!): Topic
        posts: [Post]
        post(id: ID!): Post
    }

    type Mutation {
        addBook(title: String!, author: String!, summary: String, clubs: [ID]): Book
        updateBook(id: ID!, title: String, author: String, summary: String): Book
        deleteBook(id: ID!): Book

        addClub(name: String!, currentBook: ID, pastBooks: [ID], members: [ID], topics: [ID]): Club
        updateClub(id: ID!, name: String, currentBook: ID, pastBooks: [ID], members: [ID], topics: [ID]): Club
        deleteClub(id: ID!): Club

        addUser(name: String!, email: String!, password: String!, clubs: [ID]): Auth
        updateUser(id: ID!, name: String, email: String, password: String): User
        deleteUser(id: ID!): User
        login(email: String!, password: String!): Auth

        addTopic(clubId: ID!, authorId: ID!, title: String!, bookId: ID!, posts: [ID]): Topic
        updateTopic(id: ID!, clubId: ID, title: String, bookId: ID, posts: [ID]): Topic
        deleteTopic(id: ID!): Topic

        addPost(topicId: ID!, authorId: ID!, content: String!): Post
        updatePost(id: ID!, topicId: ID, authorId: ID, content: String): Post
        deletePost(id: ID!): Post
    }
`;

module.exports = typeDefs;