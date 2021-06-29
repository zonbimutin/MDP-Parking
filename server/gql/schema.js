const { gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`

    scalar JSON

    ##### types #####

    #Response 
    type Response {
        response: String
    }

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
        description: String
        access: String
        disponibility: Int
        prices: Prices
        isActive: Boolean
        createAt: String
    }

    type Prices {
        single: Float
        multiple: Float
        subscription: Float
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
        userId: ID
        idParking: ID
        bookingStatus: String
        startDate: String
        endDate: String
        createAt: String
    }

    type BookingPopulate {
        id: ID
        userId: User
        parkingId: Parking
        bookingStatus: String
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

    #Token
    input TokenInput {
        token: String
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
        zipCode: Int!
        city: String!
        country: String!
        images: [ImageInput]
        description: String
        access: String
        disponibility: Int!
        parkingType: [ID]!
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
        getWishlist: [Parking]
        validateToken(token: TokenInput): Token

        # Booking
        getUserBookings: [BookingPopulate]
        getBooking(id: ID): BookingPopulate
        
        # Parking
        getParkings: [Parking]
        getParking(id: ID): Parking
        searchParkings(search: SearchParking): [Parking]
        getPakingsByHost: [Parking]

        
    }
    
    ##### Mutations #####  

    type Mutation {
        
        #User
        register(input: UserInput): User
        login(input: LoginInput): Token
        addIntoWishlist(id: ID) : Response
        removeFromWishlist(id: ID) : Response

        #Host
        registerHost: Token

        #Parking
        registerParking(input: ParkingInput): Parking

        #Booking
        addBooking(input: BookingInput): Booking
        cancelBooking(id: ID): Booking

        #ParkingType
        addParkingType(input: ParkingTypeInput): ParkingType

    }
`;

module.exports = typeDefs;