const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    title: String
    link: String
    description: String
    authors: [String]
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input SaveBookInput {
    title: String!, 
    description: String!, 
    authors: [String], 
    bookId: String!, 
    image: String, 
    link: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: SaveBookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;