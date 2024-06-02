import { gql } from '@apollo/client';

// User Queries
export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      email
      clubs {
        id
        name
      }
    }
  }
`;

export const GET_USERS = gql`
  query users {
    users {
      id
      name
      email
      clubs {
        id
        name
      }
    }
  }
`;

// Book Queries
export const GET_BOOK = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      title
      author
      summary
      clubs {
        id
        name
      }
    }
  }
`;

export const GET_BOOKS = gql`
  query books {
    books {
      id
      title
      author
      summary
      clubs {
        id
        name
      }
    }
  }
`;

// Club Queries
export const GET_CLUB = gql`
  query club($id: ID!) {
    club(id: $id) {
      id
      name
      currentBook {
        id
        title
      }
      pastBooks {
        id
        title
      }
      members {
        id
        name
      }
      topics {
        id
        title
      }
    }
  }
`;

export const GET_CLUBS = gql`
  query clubs {
    clubs {
      id
      name
      currentBook {
        id
        title
      }
      pastBooks {
        id
        title
      }
      members {
        id
        name
      }
      topics {
        id
        title
      }
    }
  }
`;

// Topic Queries
export const GET_TOPIC = gql`
  query topic($id: ID!) {
    topic(id: $id) {
      id
      title
      clubId {
        id
        name
      }
      bookId {
        id
        title
      }
    }
  }
`;

export const GET_TOPICS = gql`
  query topics {
    topics {
      id
      title
      clubId {
        id
        name
      }
      bookId {
        id
        title
      }
    }
  }
`;

// Post Queries
export const GET_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      content
      topicId {
        id
        title
      }
      authorId {
        id
        name
      }
    }
  }
`;

export const GET_POSTS = gql`
  query posts {
    posts {
      id
      content
      topicId {
        id
        title
      }
      authorId {
        id
        name
      }
    }
  }
`;
