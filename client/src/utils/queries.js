import { gql } from "@apollo/client";

// Query to get all users
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      _id
      email
      services
      saved_movies
    }
  }
`;

// Query to get a user by email
export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    user(email: $email) {
      _id
      email
      services
      saved_movies
    }
  }
`;
