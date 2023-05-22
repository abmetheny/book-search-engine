import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
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

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $title: String!, $description: String!, $authors: [String]!, $bookId: String!, $image: String!, $link: String!) {
    saveBook(userId: $userId, title: $title, description: $description, authors: [$authors], bookId: $bookId, image: $image, link: $link ) {
      _id
      username
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($title: String!) {
    removeBook(title: $title) {
      _id
      username
      savedBooks
    }
  }
`;
