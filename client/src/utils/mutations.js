import { gql } from "@apollo/client";

// Login mutation
export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        services
      }
    }
  }
`;

// Add user mutation
export const ADD_USER_MUTATION = gql`
  mutation AddUser($email: String!, $password: String!, $services: [String]!) {
    addUser(email: $email, password: $password, services: $services) {
      token
      user {
        _id
        email
        services
      }
    }
  }
`;
