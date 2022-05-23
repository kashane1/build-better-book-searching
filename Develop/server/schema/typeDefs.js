const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [bookSchema]!
  }

  # Set up an Auth type to handle returning data from a user being created or user login
  type Auth {
    token: ID!
    user: user
  }

  type Query {
    user(username: String!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(username: String!, savedBook: bookSchema!): User
    deleteBook(username: String!, savedBook: bookSchema!): User
  }
`;

module.exports = typeDefs;
