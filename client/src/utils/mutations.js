import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      profile {
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
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation saveBook($userId: ID!, $title: String!) {
    saveBook(profileId: $userId, title: $title) {
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
