import { gql } from "@apollo/client";

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