<<<<<<< HEAD
const userController = require("./../controllers/user");
const hostController = require("./../controllers/host");
const parkingController = require("../controllers/parking");
const bookingController = require("../controllers/booking");
const parkingTypeController = require("../controllers/parkingType");

=======
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
>>>>>>> server

const resolvers = {
    Query: {
        // User
<<<<<<< HEAD
        getUser: ()       => userController.getUser(),
        getUsers: (_, {}) => userController.getUsers(),
=======
        getUser: () => userController.getUser(),
        getWishlist: (_,{}, ctx) => userController.getWishlist(ctx),

        //booking
        getUserBookings: (_,{}, ctx) => bookingController.getUserBookings(ctx),
        getBooking: (_,{id}, ctx) => bookingController.getBooking(id, ctx),

>>>>>>> client

        // Parking
<<<<<<< HEAD
        getParkings: (_,{}) => parkingController.getAll(),
        getParking: (_, {id}) => parkingController.getParking(id),
        searchParkings: (_, {search}) => parkingController.searchParkings(search),
=======
        getParkings                  : (_, {}) => parkingController.getParkings(),
        getOneParking                : (_, {}) => parkingController.getOneParking(),
        getParkingsReviews           : (_, {}) => parkingController.getReviews(),
        getParkingsBookings          : (_, {}) => parkingController.getBookings(),
        getParkingsHosts             : (_, {}) => parkingController.getHosts(),
        getParkingsLocation          : (_, {}) => parkingController.getLocations(),
        getParkingsParkingFacilities : (_, {}) => parkingController.getParkingFacilities(),
        getReviews                  : (_, {}) => parkingController.getReviews(),

        // Booking
        getOneBooking        : (_, {}) => bookingController.getOneBooking(),
        getBookings          : (_, {}) => bookingController.getBookings(),
        getBookingsCustomers : (_, {}) => bookingController.getCustomers(),
        getBookingsRatings   : (_, {}) => bookingController.getRatings(),
        getBookingsParkings  : (_, {}) => bookingController.getParkings(),
        getBookingsPayments  : (_, {}) => bookingController.getPayments(),

        // Customers
        getOneCustomer       : (_, {}) => customerController.getOneCustomer(),
        getCustomers         : (_, {}) => customerController.getCustomers(),
        getCustomersBookings : (_, {}) => customerController.getBookings(),
        getCustomersRatings  : (_, {}) => customerController.getRatings(),
        getCustomersReview   : (_, {}) => customerController.getReviews(),

        // Facilities
        getOneFacility        : (_, {}) => facilityController.getOneFacility(),
        getFacilities         : (_, {}) => facilityController.getFacilities(),
        getFacilitiesParkings : (_, {}) => facilityController.getParkingFacilities(),

        // Feedbacks
        getOneFeedback : (_, {}) => feedbackController.getOneFeedback(),
        getFeedbacks   : (_, {}) => feedbackController.getFeedbacks(),

        // Host Earnings
        getOneHostEarning       : (_, {}) => hostEarningsController.getOneHostEarnings(),
        getHostEarnings         : (_, {}) => hostEarningsController.getHostEarnings(),
        getHostEarningsPayments : (_, {}) => hostEarningsController.getPayments(),

        // Host
        getOneHost       : (_, {}) => hostController.getOneHost(),
        getHosts         : (_, {}) => hostController.getHosts(),
        getHostsParkings : (_, {}) => hostController.getParkings(),
        getHostsRatings  : (_, {}) => hostController.getRatings(),

        // Location
        getOneLocation       : (_, {}) => locationController.getOneLocation(), 
        getLocations         : (_, {}) => locationController.getLocations(),
        getLocationsparkings : (_, {}) => locationController.getParkings(),

        // Parki Earnings
        getOneParkiEarning       : (_, {}) => parkiEarningsController.getOneParkiEarnings(),
        getParkiEarnings         : (_, {}) => parkiEarningsController.getParkiEarnings(),
        getParkiEarningsPayments : (_, {}) => parkiEarningsController.getPayments(),

        // Parking Facilities
        getOneParkingFacility          : (_, {}) => parkingFacilitiesController.getOneParkingFacilities(),
        getParkingFacilities           : (_, {}) => parkingFacilitiesController.getParkingFacilities(),
        getParkingFacilitiesParkings   : (_, {}) => parkingFacilitiesController.getParkings(),
        getParkingFacilitiesFacilities : (_, {}) => parkingFacilitiesController.getFacilities(),

        // Payment
        getOnePayment            : (_, {}) => paymentController.getOnePayment(),
        getPayments              : (_, {}) => paymentController.getPayments(),
        getPaymentsBookings      : (_, {}) => paymentController.getBookings(),
        getPaymentsRefunds       : (_, {}) => paymentController.getRefunds(),
        getPaymentsParkiEarnings : (_, {}) => paymentController.getParkiEarnings(),
        getPaymentsHostEarnings  : (_, {}) => paymentController.getHostEarnings(),

        // Rating
        getOneRating        : (_, {}) => ratingController.getOneRating(),
        getRatings          : (_, {}) => ratingController.getRatings(),
        getRatingsCustomers : (_, {}) => ratingController.getCustomers(),
        getRatingsHosts     : (_, {}) => ratingController.getHosts(),
        getRatingsBookings  : (_, {}) => ratingController.getBookings(),

        // Refund
        getOneRefund       : (_, {}) => refundController.getOneRefund(),
        getRefunds         : (_, {}) => refundController.getRefunds(),
        getRefundsPayments : (_, {}) => refundController.getPayments(),
>>>>>>> server

        // Review
        getOneReview        : (_, {}) => reviewController.getOneReview(),
        getReviews          : (_, {}) => reviewController.getReviews(),
        getReviewsCustomers : (_, {}) => reviewController.getCustomers(),
        getParkings         : (_, {}) => reviewController.getParkings(),
    },
    Mutation: {
        // User
<<<<<<< HEAD
        register: (_, { input }) => userController.register( input ),
        login: (_, { input }) => userController.login( input ),
        addIntoWishlist: (_,{ id }, ctx) => userController.addIntoWishlist(id, ctx),
        removeFromWishlist: (_,{ id }, ctx) => userController.removeFromWishlist(id, ctx),

        //Host
        registerHost: (_,{ input }, ctx) => hostController.register( input , ctx ),

        //Parking
        registerParking: (_,{ input }, ctx) => parkingController.register( input , ctx ),

        //Booking
        addBooking: (_, { input }, ctx) => bookingController.addBooking( input , ctx ),
        cancelBooking: (_, { id }, ctx) => bookingController.cancelBooking( id , ctx ),

        //ParkingType
        addParkingType: (_, { input } ) => parkingTypeController.addParkingType(input),
=======
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
>>>>>>> server
    },
};

module.exports = resolvers;