const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int!
    savedBooks: [String]
  }

  type Book {
    bookId: String!
    authors: [String!]
    description: String!
    title: String!
    image: String
    link: String
  }

  # Set up an Auth type to handle returning data from a user being created or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(username: String!, savedBook: String!): User
    removeBook(username: String!, savedBook: String!): User
  }
`;

module.exports = typeDefs;
