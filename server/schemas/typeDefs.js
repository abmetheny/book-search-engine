const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    getSingleUser(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(userId: ID!, title: String!): User
    deleteBook(title: String!): User
  }
`;

module.exports = typeDefs;