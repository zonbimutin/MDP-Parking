import { gql } from "@apollo/client";

// Mutations
export const ADD_BOOKING = gql`
  mutation addBooking($input: BookingInput) {
    addBooking(input: $input) {
      id
    }
  }
`;