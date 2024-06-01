import { gql } from '@apollo/client';

// User Mutations
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String, $email: String, $password: String) {
    updateUser(id: $id, name: $name, email: $email, password: $password) {
      _id
      name
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
      name
      email
    }
  }
`;

// Book Mutations
export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $summary: String, $clubs: [ID!]) {
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

export const REMOVE_BOOK = gql`
  mutation RemoveBook($id: ID!) {
    deleteBook(id: $id) {
      _id
      title
      author
    }
  }
`;

// Club Mutations
export const ADD_CLUB = gql`
  mutation AddClub($name: String!, $currentBook: ID, $pastBooks: [ID!], $members: [ID!], $topics: [ID!]) {
    addClub(name: $name, currentBook: $currentBook, pastBooks: $pastBooks, members: $members, topics: $topics) {
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

export const REMOVE_CLUB = gql`
  mutation RemoveClub($id: ID!) {
    deleteClub(id: $id) {
      _id
      name
    }
  }
`;

// Topic Mutations
export const ADD_TOPIC = gql`
  mutation AddTopic($clubId: ID!, $title: String!, $bookId: ID!) {
    addTopic(clubId: $clubId, title: $title, bookId: $bookId) {
      _id
      title
      clubId {
        _id
        name
      }
      bookId {
        _id
        title
      }
    }
  }
`;

export const REMOVE_TOPIC = gql`
  mutation RemoveTopic($id: ID!) {
    deleteTopic(id: $id) {
      _id
      title
    }
  }
`;

// Post Mutations
export const ADD_POST = gql`
  mutation AddPost($topicId: ID!, $authorId: ID!, $content: String!) {
    addPost(topicId: $topicId, authorId: $authorId, content: $content) {
      _id
      content
      topicId {
        _id
        title
      }
      authorId {
        _id
        name
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation RemovePost($id: ID!) {
    deletePost(id: $id) {
      _id
      content
    }
  }
`;
