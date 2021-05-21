const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: Int # ID
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
        id: Int # ID
        idCustomer: Int # ID
        idParking: Int # ID
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
        parkingNumber: Int
        zipCode: Int
        city: String
        country: String
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
    
    input ParkingInput {
        streetNumber: Int!
        streetName: String!
        parkingNumber: Int
        zipCode: Int
        city: String
        country: String
    }
    
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
    }

    type Query {
        # User
        getUser(input: Int): [User]
        getUsers: [User]

        # Parking
        getParkings: [Parking]
        getParking: [Parking]
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
    }
`;

module.exports = typeDefs;