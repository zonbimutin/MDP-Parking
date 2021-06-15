import { gql } from "@apollo/client";

export const GET_PARKING_TYPES = gql`
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
    }
  }
`;