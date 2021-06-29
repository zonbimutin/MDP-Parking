import { gql } from "@apollo/client";

export const REGISTER_HOST = gql`
  mutation registerHost {
    registerHost {
      token
    }
  }
`;

export const GET_PARKINGS = gql`
  query getPakingsByHost {
    getPakingsByHost {
      id
      coordinates {
        latitud
        longitud
      }
      bookings {
        startDate
        endDate
        id
        userId
        bookingStatus
        createAt
      }
      address
      country
      city
      zipCode
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
