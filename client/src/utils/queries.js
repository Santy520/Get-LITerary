import { gql } from '@apollo/client';

// User Queries
export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
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

export const GET_USERS = gql`
  query users {
    users {
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

// Book Queries
export const GET_BOOK = gql`
  query book($id: ID!) {
    book(id: $id) {
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

export const GET_BOOKS = gql`
  query books {
    books {
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

// Club Queries
export const GET_CLUB = gql`
  query club($id: ID!) {
    club(id: $id) {
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

export const GET_CLUBS = gql`
  query clubs {
    clubs {
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

// Topic Queries
export const GET_TOPIC = gql`
query GET_TOPIC_BY_ID ($id: ID!) {
  topic(id: $id) {
    _id
    title
    posts {
      _id
      authorId {
        name
      }
      content
      createdAt
    }
    clubId {
      name
    }
  }
}
`;

export const GET_TOPICS = gql`
  query topics {
    topics {
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

// Post Queries
export const GET_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
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

export const GET_POSTS = gql`
  query posts {
    posts {
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