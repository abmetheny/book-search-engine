import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      savedBooks
    }
  }
`;