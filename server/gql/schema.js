const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID
        host: ID
        username: String
        firstname: String
        lastname: String
        email: String
        password: String
        avatar: String
        createAt: String
    }
    type Token {
        token: String
    }

    type Host {
        id: ID
        createAt: String
    }

    type Parking {
        id: ID
        idUser: ID
        streetNumber: Int
        streetName: String
        parkingNumber: Int
        zipCode: Int
        city: String
        country: String
        createAt: String
        
    }

    type Booking {
        id: ID
        idUser: ID
        idParking: ID
        bookingSatus: String
        startDate: String
        endDate: String
        createAt: String
    }

    input UserInput {
        username: String!
        firstname: String!
        lastname: String!
        email: String!
        password: String!
    }

    input HostInput {
        name: String
    }

    input LoginInput {
        email: String!
        password: String!
    }

    input ParkingInput {
        streetNumber: Int!
        streetName: String!
        parkingNumber: Int
        zipCode: Int
        city: String
        country: String
    }

    input BookingInput {
        idParking: ID!
        startDate: String!
        endDate: String!
    }

    type Query {
        # User
        getUser(input: Int): User

        # Parking

        getParkings: [Parking]

    }

    type Mutation {
        #User
        register(input: UserInput): User
        login(input: LoginInput): Token

        #Host
        registerHost(input: HostInput): Host

        #Parking
        registerParking(input: ParkingInput): Parking

        #Booking
        addBooking(input: BookingInput): Booking

    }
`;

module.exports = typeDefs;