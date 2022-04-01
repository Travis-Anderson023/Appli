import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_APPLICATION = gql`
  mutation addApplication($company: String!, $date_applied: String!, $contact_name: String!, $contact_phone: String, $contact_email: String!, $contact_website: String) {
    addApplication(company: $company, date_applied: $date_applied, contact_name: $contact_name, contact_phone: $contact_phone, contact_email: $contact_email, contact_website: $contact_website) {
      application {
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
  }
`;

export const ADD_COVERLETTER = gql`
  mutation addCoverLetter($text: String!) {
    addCoverLetter(text: $text) {
      coverletter {
        _id
        text
        createdAt
      }
    }
  }
`;

export const DELETE_APPLICATION = gql`
  mutation deleteApplication($applicationId: ID!) {
    deleteApplication(applicationId: $applicationId) {
  
        _id
      
    }
  }
`;
