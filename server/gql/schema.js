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
<<<<<<< HEAD
        id: ID
        host: ID
        username: String
=======
        id: Int
>>>>>>> server
        firstname: String
        lastname: String
        email: String
        password: String
<<<<<<< HEAD
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
=======
        photo: String
        birthDate: String
        phone_number: String
        gender: String
        accountStatus: String
        updatedAt: String
        createdAt: String
    }
    
    type Token {
        token: String
    }

    type Booking {
        id: Int
        idCustomer: Int
        idParking: Int
        startBooking: String
        endBooking: String
        status: String
        updatedAt: String
        createdAt: String
    }
    
    type Customer {
        id: Int # ID
        paymentType: String,
        cardNumber: String,
        securityCode: String,
        nameOnCard: String,
        updatedAt: String,
        createdAt: String,
    }
    
    type Facility {
        id: Int # ID
        name: String
        updatedAt: String
        createdAt: String
    }
    
    type Feedback {
        id: Int # ID
        idPerson: Int # ID
        description: String
        date: String
        updatedAt: String
        createdAt: String
    }
    
    type Host {
        id: Int # ID
        bankName: String
        accountType: String
        accountNumber: String
        routingNumber: String
        updatedAt: String
        createdAt: String
    }
    
    type HostEarnings {
        id: Int # ID
        idPayment: String
        earningsAmount: String
        updatedAt: String
        createdAt: String
    }
    
    type Location {
        id: Int # ID
        country: String
        state: String
        city: String
        zipcode: String
        updatedAt: String
        createdAt: String
    }
    
    type ParkiEarnings {
        id: Int # ID
        idPayment: Int # ID
        earningsAmount: String
        updatedAt: String
        createdAt: String
    }
    
    type Parking {
        id: Int # ID
        idUser: Int # ID
        streetNumber: Int
        streetName: String
>>>>>>> server
        parkingNumber: Int
        zipCode: Int
        bookings: [Booking]
        parkingType: [ParkingType]
        city: String
        country: String
<<<<<<< HEAD
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
=======
        updatedAt: String
        createdAt: String
    }
    
    type ParkingFacilities {
        id: Int # ID
        idParking: Int # ID
        idFacilities: Int # ID
        updatedAt: String
        createdAt: String
    }
    
    type Payment {
        id: Int # ID
        idBooking: String
        amount: String
        updatedAt: String
        createdAt: String 
    }
    
    type Rating {
        id: Int # ID
        idBooking: Int # ID
        idCustomer: Int # ID
        idHost: Int # ID
        customerRating: String
        customerComment: String
        hostRating: String
        hostComment: String
        updatedAt: String
        createdAt: String
    }
    
    type Refund {
        id: Int # ID 
        idPayment: Int # ID
        refundDate: String
        updatedAt: String
        createdAt: String
    }
    
    type Review {
        id: Int # ID
        idCustomer: Int # ID
        idParking: Int # ID
        comments: String
        date: String
        updatedAt: String
        createdAt: String
>>>>>>> server
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
<<<<<<< HEAD
    
=======

>>>>>>> server
    input LoginInput {
        email: String!
        password: String!
    }
<<<<<<< HEAD

    #Host
    input HostInput {
        name: String
    }
    
    #Parking
=======
    
    input BookingInput {
        idCustomer: Int! # ID!
        idParking: Int! # ID!
        startBooking: String
        endBooking: String
        status: String
    }
    
    input CustomerInput {
        paymentType: String!
        cardNumber: String!
        securityCode: String!
        nameOnCard: String!
    }
    
    input FacilityInput {
        name: String!
    }
    
    input FeedbackInput {
        idPerson: Int! # ID!
        description: String!
        date: String!
    }
    
    input HostInput {
        bankName: String!
        accountType: String!
        accountNumber: String!
        routingNumber: String!
    }
    
    input HostEarningsInput {
        idPayment: String!
        earningsAmount: String!
    }
    
    input LocationInput {
        country: String!
        state: String!
        city: String!
        zipcode: String!
    }
    
    input ParkiEarningsInput {
        idPayment: Int! # ID!
        earningsAmount: String!
    }
    
>>>>>>> server
    input ParkingInput {
        address: String!
        coordinates: CoordinatesInput!
        parkingNumber: Int
        zipCode: Int
        city: String
        country: String
    }
    
<<<<<<< HEAD
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
=======
    input ParkingFacilitiesInput {
        idParking: Int! # ID!
        idFacilities: Int! # ID!
    }
    
    input PaymentInput {
        idBooking: String
        amount: String
    }
    
    input RatingInput {
        idBooking: Int! # ID!
        idCustomer: Int! # ID!
        idHost: Int! # ID!
        customerRating: String!
        customerComment: String!
        hostRating: String!
        hostComment: String!
    }
    
    input RefundInput {
        idPayment: Int! # ID!
        refundDate: String!
    }
    
    input ReviewInput {
        idCustomer: Int! # ID!
        idParking: Int! # ID!
        comments: String!
        date: String
>>>>>>> server
    }

    ##### Queries #####    
    
    type Query {
<<<<<<< HEAD
=======
        # User
        getUser(input: Int): [User]
        getUsers: [User]
>>>>>>> server

        # User
        getUser(id: ID): User
        
        # Parking
        getParkings: [Parking]
<<<<<<< HEAD
        getParking(id: ID): Parking
        searchParkings(search: SearchParking): [Parking]

        
=======
        getOneParking: [Parking]
        getParkingsReviews: [Parking]
        getParkingsBookings: [Parking]
        getParkingsHosts: [Parking]
        getParkingsLocation: [Parking]
        getParkingsParkingFacilities: [Parking]

        # Booking
        getOneBooking: [Booking]
        getBookings: [Booking]
        getBookingsCustomers: [Booking]
        getBookingsRatings: [Booking]
        getBookingsParkings: [Booking]
        getBookingsPayments: [Booking]

        # Customers
        getOneCustomer: [Customer]
        getCustomers: [Customer]
        getCustomersBookings: [Customer]
        getCustomersRatings: [Customer]
        getCustomersReview: [Customer]

        # Facilities
        getOneFacility: [Facility]
        getFacilities: [Facility]
        getFacilitiesParkings: [Facility]

        # Feedbacks
        getOneFeedback: [Feedback]
        getFeedbacks  : [Feedback]

        # Host Earnings
        getOneHostEarning: [HostEarnings]
        getHostEarnings   : [HostEarnings]
        getHostEarningsPayments: [HostEarnings]

        # Host
        getOneHost: [Host]
        getHosts: [Host]
        getHostsParkings: [Host]
        getHostsRatings: [Host]

        # Location
        getOneLocation: [Location]
        getLocations: [Location]
        getLocationsparkings: [Location]

        # Parki Earnings
        getOneParkiEarning: [ParkiEarnings]
        getParkiEarnings: [ParkiEarnings]
        getParkiEarningsPayments: [ParkiEarnings]

        # Parking Facilities
        getOneParkingFacility: [ParkingFacilities]
        getParkingFacilities: [ParkingFacilities]
        getParkingFacilitiesParkings: [ParkingFacilities]
        getParkingFacilitiesFacilities: [ParkingFacilities]

        # Payment
        getOnePayment: [Payment]
        getPayments: [Payment]
        getPaymentsBookings: [Payment]
        getPaymentsRefunds: [Payment]
        getPaymentsParkiEarnings: [Payment]
        getPaymentsHostEarnings: [Payment]

        # Rating
        getOneRating: [Rating]
        getRatings: [Rating]
        getRatingsCustomers: [Rating]
        getRatingsHosts: [Rating]
        getRatingsBookings: [Rating]

        # Refund
        getOneRefund: [Refund]
        getRefunds: [Refund]
        getRefundsPayments: [Refund]

        # Review
        getOneReview: [Review]
        getReviews: [Review]
        getReviewsCustomers: [Review]
        getReviewsParkings: [Review]
>>>>>>> server
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

<<<<<<< HEAD
        #ParkingType
        addParkingType(input: ParkingTypeInput): ParkingType

=======
        # Customer
        addCustomer(input: CustomerInput): Customer
        
        # Facility
        addFacility(input: FacilityInput): Facility
        
        # Feedback
        addFeedback(input: FeedbackInput): Feedback

        # Host Earning
        addHostEarning(input: HostEarningsInput): HostEarnings

        # Host
        addHost(input: HostInput): Host 

        # Location
        addLocation(input: LocationInput): Location

        # Parki Earnings
        addParkiEarnings(input: ParkiEarningsInput): ParkiEarnings
        
        # Refund
        addRefund(input: RefundInput): Refund

        # Review
        addReview(input: ReviewInput): Review
>>>>>>> server
    }
`;

module.exports = typeDefs;