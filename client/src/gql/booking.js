import { gql } from "@apollo/client";

// Mutations
export const ADD_BOOKING = gql`
  mutation addBooking($input: BookingInput) {
    addBooking(input: $input) {
      id
    }
  }
`;

// Queries
export const GET_BOOKING = gql`
  query getBooking($id: ID){
    getBooking(id: $id){
      id
      startDate
      endDate
      bookingStatus
      parkingId {
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
        address
        images {
          contentType
        }
        parkingType {
          label
          img
          description
        }
        disponibility
        access
        description
      }
      
    }
  }
`

export const GET_USER_BOOKINGS = gql`
  query getUserBookings {
    getUserBookings {
      id
      startDate
      endDate
      bookingStatus
      createAt
      parkingId {
        id
        address
        address
        country
        city
        zipCode
        prices {
          single
          multiple
          subscription
        }
        disponibility
        access
        description
        createAt
        isActive
      }
      
    }
  }
`