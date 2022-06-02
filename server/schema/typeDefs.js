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

  input bookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
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

    saveBook(userId: ID!, input: bookInput!): User
    removeBook(userId: ID!, savedBook: String!): User
  }
`;

// my old saveBook mutation:
// saveBook(userId: ID!, savedBook: String!): User

module.exports = typeDefs;
