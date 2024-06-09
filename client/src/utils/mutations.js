import { gql } from '@apollo/client';

// User Mutations
export const ADD_USER = gql`
    mutation addUser($name: String!, $email: String!, $password: String!, $clubs: [ID]) {
        addUser(name: $name, email: $email, password: $password, clubs: $clubs) {
            token
            user {
                _id
                name
                email
                clubs {
                    _id
                    name
                }
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                name
                email
                clubs {
                    _id
                    name
                }
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $name: String, $email: String, $password: String) {
        updateUser(id: $id, name: $name, email: $email, password: $password) {
            _id
            name
            email
            clubs {
                _id
                name
            }
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            _id
        }
    }
`;

// Book Mutations
export const ADD_BOOK = gql`
    mutation addBook($title: String!, $author: String!, $summary: String, $clubs: [ID]) {
        addBook(title: $title, author: $author, summary: $summary, clubs: $clubs) {
            _id
            title
            author
            summary
            clubs {
                _id
                name
            }
        }
    }
`;

export const UPDATE_BOOK = gql`
    mutation updateBook($id: ID!, $title: String, $author: String, $summary: String) {
        updateBook(id: $id, title: $title, author: $author, summary: $summary) {
            _id
            title
            author
            summary
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($id: ID!) {
        deleteBook(id: $id) {
            _id
        }
    }
`;

// Club Mutations
export const ADD_CLUB = gql`
    mutation addClub($name: String!) {
        addClub(name: $name) {
            _id
            name
        }
    }
`;

export const UPDATE_CLUB = gql`
    mutation updateClub($id: ID!, $name: String, $currentBook: ID, $pastBooks: [ID], $members: [ID], $topics: [ID]) {
        updateClub(id: $id, name: $name, currentBook: $currentBook, pastBooks: $pastBooks, members: $members, topics: $topics) {
            _id
            name
            currentBook {
                _id
                title
            }
            pastBooks {
                _id
                title
            }
            members {
                _id
                name
            }
            topics {
                _id
                title
            }
        }
    }
`;

export const DELETE_CLUB = gql`
    mutation deleteClub($id: ID!) {
        deleteClub(id: $id) {
            _id
        }
    }
`;

// Topic Mutations
export const ADD_TOPIC = gql`
    mutation addTopic($clubId: ID!, $title: String!, $bookId: ID!, $posts: [ID]) {
        addTopic(clubId: $clubId, title: $title, bookId: $bookId, posts: $posts) {
            _id
            clubId {
                _id
                name
            }
            title
            bookId {
                _id
                title
            }
            posts {
                _id
                content
            }
        }
    }
`;

export const UPDATE_TOPIC = gql`
    mutation updateTopic($id: ID!, $clubId: ID, $title: String, $bookId: ID, $posts: [ID]) {
        updateTopic(id: $id, clubId: $clubId, title: $title, bookId: $bookId, posts: $posts) {
            _id
            clubId {
                _id
                name
            }
            title
            bookId {
                _id
                title
            }
            posts {
                _id
                content
            }
        }
    }
`;

export const DELETE_TOPIC = gql`
    mutation deleteTopic($id: ID!) {
        deleteTopic(id: $id) {
            _id
        }
    }
`;

// Post Mutations
export const ADD_POST = gql`
mutation ADD_POST($topicId: ID!, $content: String!) {
    addPost(topicId: $topicId, content: $content) {
      topicId {
        _id
      }
      authorId {
        _id
      }
      content
    }
  }
`;

export const UPDATE_POST = gql`
    mutation updatePost($id: ID!, $topicId: ID, $authorId: ID, $content: String) {
        updatePost(id: $id, topicId: $topicId, authorId: $authorId, content: $content) {
            _id
            topicId {
                _id
                title
            }
            authorId {
                _id
                name
            }
            content
            updatedAt
        }
    }
`;

export const DELETE_POST = gql`
    mutation deletePost($id: ID!) {
        deletePost(id: $id) {
            _id
        }
    }
`;