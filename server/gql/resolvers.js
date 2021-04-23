const userController              = require("./../controllers/user");
const parkingController           = require("../controllers/parking");
const bookingController           = require("../controllers/booking");
const customerController          = require("./../controllers/customer");
const facilityController          = require("./../controllers/facility");
const feedbackController          = require("./../controllers/feedback");
const hostEarningsController      = require("./../controllers/host_earnings");
const hostController              = require("./../controllers/host");
const locationController          = require("./../controllers/location");
const parkiEarningsController     = require("./../controllers/parki_earnings");
const parkingFacilitiesController = require("./../controllers/parking_facilities");
const paymentController           = require("./../controllers/payment");
const ratingController            = require("./../controllers/rating");
const refundController            = require("./../controllers/refund");
const reviewController            = require("./../controllers/review");

const resolvers = {
    Query: {
        // User
        getUser: () => userController.getUser(),

        // Parking
        getParkings                 : (_,{})  => parkingController.getParkings(),
        getParkingsReviews          : (_,{})  => parkingController.getReviews(),
        getParkingsBookings         : (_,{})  => parkingController.getBookings(),
        getParkingsHosts            : (_,{})  => parkingController.getHosts(),
        getParkingsLocation         : (_,{})  => parkingController.getLocations(),
        getParkingsParkingFacilities: (_,{})  => parkingController.getParkingFacilities(),

        // Booking
        getBookings         : (_, {}) => bookingController.getBookings(),
        getBookingsCustomers: (_, {}) => bookingController.getCustomers(),
        getBookingsRatings  : (_, {}) => bookingController.getRatings(),
        getBookingsParkings : (_, {}) => bookingController.getParkings(),
        getBookingsPayments : (_, {}) => bookingController.getPayments(),

        // Customers
        getCustomers        : (_, {})  => customerController.getCustomers(),
        getCustomersBookings: (_, {})  => customerController.getBookings(),
        getCustomersRatings : (_, {})  => customerController.getRatings(),
        getCustomersReview  : (_, {})  => customerController.getReviews(),

        // Facilities
        getFacilities        : (_, {}) => facilityController.getFacilities(),
        getFacilitiesParkings: (_, {}) => facilityController.getParkingFacilities(),

        // Feedbacks
        getFeedBacks: (_, {}) => feedbackController.getFeedbacks(),

        // Host Earnings
        getHostEarnings        : (_, {}) => hostEarningsController.getHostEarnings(),
        getHostEarningsPayments: (_, {}) => hostEarningsController.getPayments(),

        // Host
        getHosts        : (_, {}) => hostController.getHosts(),
        getHostsParkings: (_, {}) => hostController.getParkings(),
        getHostsRatings : (_, {}) => hostController.getRatings(),

        // Location
        getLocations        : (_, {}) => locationController.getLocations(),
        getLocationsparkings: (_, {}) => locationController.getParkings(),

        // Parki Earnings
        getParkiEarnings        : (_, {}) => parkiEarningsController.getParkiEarnings(),
        getParkiEarningsPayments: (_, {}) => parkiEarningsController.getPayments(),

        // Parking Facilities
        getParkingFacilities          : (_, {}) => parkingFacilitiesController.getParkingFacilities(),
        getParkingFacilitiesParkings  : (_, {}) => parkingFacilitiesController.getParkings(),
        getParkingFacilitiesFacilities: (_, {}) => parkingFacilitiesController.getFacilities(),

        // Payment
        getPayments             : (_, {}) => paymentController.getPayments(),
        getPaymentsBookings     : (_, {}) => paymentController.getBookings(),
        getPaymentsRefunds      : (_, {}) => paymentController.getRefunds(),
        getPaymentsParkiEarnings: (_, {}) => paymentController.getParkiEarnings(),
        getPaymentsHostEarnings : (_, {}) => paymentController.getHostEarnings(),

        // Rating
        getRatings         : (_, {}) => ratingController.getRatings(),
        getRatingsCustomers: (_, {}) => ratingController.getCustomers(),
        getRatingsHosts    : (_, {}) => ratingController.getHosts(),
        getRatingsBookings : (_, {}) => ratingController.getBookings(),

        // Refund
        getRefunds        : (_, {}) => refundController.getRefunds(),
        getRefundsPayments: (_, {}) => refundController.getPayments(),

        // Review
        getReviews         : (_, {}) => reviewController.getReviews(),
        getReviewsCustomers: (_, {}) => reviewController.getCustomers(),
        getParkings        : (_, {}) => reviewController.getParkings(),
    },
    Mutation: {
        // User
        register: (_, { input })              => userController.register( input ),
        login: (_, { input })                 => userController.login( input ),

        //Booking
        addBooking: (_, { input }, ctx)       => bookingController.createBooking( input , ctx ), // .addBooking( input , ctx ),

        // Customer
        addCustomer: (_, { input }, ctx)      => customerController.createCustomer( input , ctx ), // .addBooking( input , ctx ),

        // Facility
        addFacility: (_, { input }, ctx)      => facilityController.createFacility( input , ctx ), // .addBooking( input , ctx ),

        // Feedback
        addFeedback: (_, { input }, ctx)      => feedbackController.createFeedback( input , ctx ), // .addBooking( input , ctx ),

        // Host Earning
        addHostEarning: (_, { input }, ctx)   => hostEarningsController.createHostEarnings( input , ctx ), // .addBooking( input , ctx ),

        // Host
        addHost: (_, { input }, ctx)          => hostController.createHost( input , ctx ), // .addBooking( input , ctx ),

        // Location
        addLocation: (_, { input }, ctx)      => locationController.createLocation( input , ctx ), // .addBooking( input , ctx ),

        // Parki Earnings
        addParkiEarnings: (_, { input }, ctx) => parkiEarningsController.createParkiEarnings( input , ctx ), // .addBooking( input , ctx ),

        // Parking
        registerParking: (_,{ input }, ctx)   => parkingController.register( input , ctx ),

        // Refund
        addRefund: (_, { input }, ctx)        => refundController.createRefund( input , ctx ), // .addBooking( input , ctx ),

        // Review
        addReview: (_, { input }, ctx)        => reviewController.createReview( input , ctx ), // .addBooking( input , ctx ),
    },
};

module.exports = resolvers;