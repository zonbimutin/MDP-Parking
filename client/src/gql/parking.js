import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation registerParking($input: ParkingInput) {
    registerParking(input: $input) {
      id
    }
  }
`;



export const SEARCH = gql`
  query searchParkings($search: SearchParking) {
    searchParkings(search: $search) {
      id
      user {
        id
        firstname
        lastname
        avatar
      }
      coordinates {
        latitud
        longitud
      }
      bookings {
        startDate
        endDate
      }
      address
      images {
        contentType
      }
      prices {
        single
        multiple
        subscription
      }
      parkingType {
        label
        img
        description
      }
      disponibility
      access
      description
      createAt
      isActive
    }
  }
`;

export const GET_PARKING = gql`
  query getParking($id: ID) {
    getParking(id: $id) {
      id
      user {
        id
        firstname
        lastname
        avatar
      }
      coordinates {
        latitud
        longitud
      }
      bookings {
        startDate
        endDate
      }
      address
      images {
        contentType
      }
      prices {
        single
        multiple
        subscription
      }
      parkingType {
        label
        img
        description
      }
      disponibility
      access
      description
      createAt
      isActive
    }
  }
`;
