const { gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`

    scalar JSON

    ##### types #####


    #Token
    type Token {
        token: String
    }
    
    #User
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
    
    
    #Host
    type Host {
        id: ID
        stripeAccount: JSON
        createAt: String
    }

    #Parking
    type Parking {
        id: ID
        user: User
        address: String
        coordinates: Coordinates
        parkingNumber: Int
        zipCode: Int
        bookings: [Booking]
        parkingType: [ParkingType]
        city: String
        country: String
        images: [Image]
        createAt: String
    }

    
    type Image {
        data: String
        contentType: String
    }
    
    type Coordinates {
        latitud: Float
        longitud: Float
    }
    
    #Booking
    type Booking {
        id: ID
        idUser: ID
        idParking: ID
        bookingSatus: String
        startDate: String
        endDate: String
        createAt: String
    }

    type ParkingType {
        id: ID
        label: String
        img: String
        description: String
    }

    ##### Inputs #####    
    
    #User
    input UserInput {
        username: String!
        firstname: String!
        lastname: String!
        email: String!
        password: String!
    }
    
    input LoginInput {
        email: String!
        password: String!
    }

    #Host
    input HostInput {
        name: String
    }
    
    #Parking
    input ParkingInput {
        address: String!
        coordinates: CoordinatesInput!
        parkingNumber: Int
        zipCode: Int
        city: String
        country: String
        images: [ImageInput]
    }
    
    input CoordinatesInput {
        latitud: Float!
        longitud: Float!
    }

    input SearchParking {
        dates: DatesRange
        types: [ID]
    }

    input DatesRange {
        from: String
        to: String
    }

    input ImageInput {
        data: String
        contentType: String
    }
    
    #Booking
    input BookingInput {
        parkingId: ID!
        dates: DatesRange!
    }

    #ParkingType
    input ParkingTypeInput {
        label: String!
        img: String!
        description: String
    }

    ##### Queries #####    
    
    type Query {

        # User
        getUser(id: ID): User
        
        # Parking
        getParkings: [Parking]
        getParking(id: ID): Parking
        searchParkings(search: SearchParking): [Parking]

        
    }
    
    ##### Mutations #####  

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

        #ParkingType
        addParkingType(input: ParkingTypeInput): ParkingType

    }
`;

module.exports = typeDefs;