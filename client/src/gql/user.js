import { gql } from "@apollo/client";

// Mutations
export const REGISTER = gql`
  mutation register($input: UserInput) {
    register(input: $input) {
      id
      firstname
      lastname
      email
      createAt
    }
  }
`;

export const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      token
    }
  }
`;


// Queries
export const GET_WISHLIST = gql`
  query getWishlist {
    getWishlist {
      id
      user {
        id
        firstname
        lastname
        avatar
      }
      address
    }
  }
`