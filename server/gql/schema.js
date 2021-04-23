const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID
        firstname: String
        lastname: String
        email: String
        password: String
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
        id: ID
        idCustomer: ID
        idParking: ID
        startBooking: String
        endBooking: String
        status: String
        updatedAt: String
        createdAt: String
    }
    
    type Customer {
        id: ID
        paymentType: String,
        cardNumber: String,
        securityCode: String,
        nameOnCard: String,
        updatedAt: String,
        createdAt: String,
    }
    
    type Facility {
        id: ID
        name: String
        updatedAt: String
        createdAt: String
    }
    
    type Feedback {
        id: ID
        idPerson: ID
        description: String
        date: String
        updatedAt: String
        createdAt: String
    }
    
    type Host {
        id: ID
        bankName: String
        accountType: String
        accountNumber: String
        routingNumber: String
        updatedAt: String
        createdAt: String
    }
    
    type HostEarnings {
        id: ID
        idPayment: String
        earningsAmount: String
        updatedAt: String
        createdAt: String
    }
    
    type Location {
        id: ID
        country: String
        state: String
        city: String
        zipcode: String
        updatedAt: String
        createdAt: String
    }
    
    type ParkiEarnings {
        id: ID
        idPayment: ID
        earningsAmount: String
        updatedAt: String
        createdAt: String
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
        updatedAt: String
        createdAt: String
    }
    
    type ParkingFacilities {
        id: ID
        idParking: ID
        idFacilities: ID
        updatedAt: String
        createdAt: String
    }
    
    type Payment {
        id: ID
        idBooking: String
        amount: String
        updatedAt: String
        createdAt: String 
    }
    
    type Rating {
        id: ID
        idBooking: ID
        idCustomer: ID
        idHost: ID
        customerRating: String
        customerComment: String
        hostRating: String
        hostComment: String
        updatedAt: String
        createdAt: String
    }
    
    type Refund {
        id: ID 
        idPayment: ID
        refundDate: String
        updatedAt: String
        createdAt: String
    }
    
    type Review {
        id: ID
        idCustomer: ID
        idParking: ID
        comments: String
        date: String
        updatedAt: String
        createdAt: String
    }

    input UserInput {
        firstname: String!
        lastname: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }
    
    input BookingInput {
        idCustomer: ID!
        idParking: ID!
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
        idPerson: ID!
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
        idPayment: ID!
        earningsAmount: String!
    }
    
    input ParkingInput {
        streetNumber: Int!
        streetName: String!
        parkingNumber: Int
        zipCode: Int
        city: String
        country: String
    }
    
    input ParkingFacilitiesInput {
        idParking: ID!
        idFacilities: ID!
    }
    
    input PaymentInput {
        idBooking: String
        amount: String
    }
    
    input RatingInput {
        idBooking: ID!
        idCustomer: ID!
        idHost: ID!
        customerRating: String!
        customerComment: String!
        hostRating: String!
        hostComment: String!
    }
    
    input RefundInput {
        idPayment: ID!
        refundDate: String!
    }
    
    input ReviewInput {
        idCustomer: ID!
        idParking: ID!
        comments: String!
        date: String
    }

    type Query {
        # User
        getUser(input: Int): User

        # Parking
        getParkings: [Parking]
        getParkingsReviews: [Parking]
        getParkingsBookings: [Parking]
        getParkingsHosts: [Parking]
        getParkingsLocation: [Parking]
        getParkingsParkingFacilities: [Parking]

        # Booking
        getBookings: [Booking]
        getBookingsCustomers: [Booking]
        getBookingsRatings: [Booking]
        getBookingsParkings: [Booking]
        getBookingsPayments: [Booking]

        # Customers
        getCustomers: [Customer]
        getCustomersBookings: [Customer]
        getCustomersRatings: [Customer]
        getCustomersReview: [Customer]

        # Facilities
        getFacilities: [Facility]
        getFacilitiesParkings: [Facility]

        # Feedbacks
        getFeedBacks: [Feedback]

        # Host Earnings
        getHostEarnings: [HostEarnings]
        getHostEarningsPayments: [HostEarnings]

        # Host
        getHosts: [Host]
        getHostsParkings: [Host]
        getHostsRatings: [Host]

        # Location
        getLocations: [Location]
        getLocationsparkings: [Location]

        # Parki Earnings
        getParkiEarnings: [ParkiEarnings]
        getParkiEarningsPayments: [ParkiEarnings]

        # Parking Facilities
        getParkingFacilities: [ParkingFacilities]
        getParkingFacilitiesParkings: [ParkingFacilities]
        getParkingFacilitiesFacilities: [ParkingFacilities]

        # Payment
        getPayments: [Payment]
        getPaymentsBookings: [Payment]
        getPaymentsRefunds: [Payment]
        getPaymentsParkiEarnings: [Payment]
        getPaymentsHostEarnings: [Payment]

        # Rating
        getRatings: [Rating]
        getRatingsCustomers: [Rating]
        getRatingsHosts: [Rating]
        getRatingsBookings: [Rating]

        # Refund
        getRefunds: [Refund]
        getRefundsPayments: [Refund]

        # Review
        getReviews: [Review]
        getReviewsCustomers: [Review]
        getReviewsParkings: [Review]
    }

    type Mutation {
        #User
        register(input: UserInput): User
        login(input: LoginInput): Token

        #Parking
        registerParking(input: ParkingInput): Parking

        #Booking
        addBooking(input: BookingInput): Booking

    }
`;

module.exports = typeDefs;