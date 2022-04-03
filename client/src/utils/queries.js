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
        cover_letter
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
        cover_letter
      }
    }
  }
`;