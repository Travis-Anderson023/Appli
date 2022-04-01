import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      password
      applications {
        _id
        company
        date_applied
        contact_name
        contact_phone
        contact_email
        contact_website
        response
        createdAt
        coverletter {
          _id
          text
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
      applications {
        _id
        company
        date_applied
        contact_name
        contact_phone
        contact_email
        contact_website
        response
        createdAt
        coverletter {
          _id
          text
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const QUERY_APPLICATIONS = gql`
  query applications ($username: String!) {
    applications(username: $username) {
      _id
      company
      date_applied
      contact_name
      contact_phone
      contact_email
      contact_website
      response
      createdAt
      coverletter {
        _id
        text
        createdAt
        updatedAt
      }
    }
  }
`;

export const QUERY_APPLICATION = gql`
  query application($applicationId: ID!) {
    application(applicationId: $applicationId) {
        _id
        company
        date_applied
        contact_name
        contact_phone
        contact_email
        contact_website
        response
        createdAt
        coverletter
    }
  }
`;

export const QUERY_COVERLETTER = gql`
  query coverletter($coverletterId: ID!) {
    coverletter(coverletterId: $coverletterId) {
        _id
        text
        createdAt
    }
  }
`;