const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    applications: [Application]
  }

  type Application {
    _id: ID
    company: String
    date_applied: String
    contact_name: String
    contact_phone: String
    contact_email: String
    contact_website: String
    respone: Boolean
    createdAt: String
    coverletter: CoverLetter
  }

  type CoverLetter {
    _id: ID
    text: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    applications(username: String!): [Application]
    application(applicationId: ID!): Application
    coverletter(coverletterId: ID!): CoverLetter
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addApplication(company: String!, date_applied: String!, contact_name: String!, contact_phone: String, contact_email: String!, contact_website: String): Application
    addCoverLetter(text: String!): CoverLetter
  }
`;

module.exports = typeDefs;