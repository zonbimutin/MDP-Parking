import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation registerParking($input: ParkingInput) {
    registerParking(input: $input) {
      id
    }
  }
`;
