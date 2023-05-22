import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
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
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation saveBook($userId: ID!, $title: String!, $description: String!, authors: [String]!, bookId: String!, image: String!, link: String!) {
    saveBook(userId: $userId, title: $title, description: $description, authors: [$authors], bookId: $bookId, image: $image, link: $link ) {
      _id
      username
      savedBooks
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($title: String!) {
    deleteBook(title: $title) {
      _id
      username
      savedBooks
    }
  }
`;
