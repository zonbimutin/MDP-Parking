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

export const REMOVE_WISHLIST_ITEM = gql`
  mutation removeFromWishlist($id: ID) {
    removeFromWishlist(id: $id) {
      response
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
// Queries
export const GET_USER = gql`
  query getUser($id:ID) {
    getUser(id: $id) {
      id
      firstname
      lastname
      email
    }
  }

`
export const VALIDATE_TOKEN = gql`
  query validateToken ($token: TokenInput) {
    validateToken(token: $token){
      token
    }
  }
`

