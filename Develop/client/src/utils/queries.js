import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks
      bookcount
    }
  }
`;

export const GET_USERS = gql`
  query user {
    users {
      _id
      username
      email
      savedBooks
      bookcount
    }
  }
`;

