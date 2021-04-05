const userController = require("./../controllers/user");
const parkingController = require("../controllers/parking");
const bookingController = require("../controllers/booking");
const customerController = require("./../controllers/customer");
const Controller = require("./../controllers/facility");
const Controller = require("./../controllers/feedback");
const Controller = require("./../controllers/host_earnings");
const Controller = require("./../controllers/host");
const Controller = require("./../controllers/location");
const Controller = require("./../controllers/parki_earnings");
const Controller = require("./../controllers/parking_facilities");
const Controller = require("./../controllers/payment");
const Controller = require("./../controllers/rating");
const Controller = require("./../controllers/refund");
const Controller = require("./../controllers/review");

const resolvers = {
    Query: {
        // User
        getUser: () => userController.getUser(),

        // Parking
        getParkings: (_,{}) => parkingController.getAll(),

    },
    Mutation: {
        // User
        register: (_, { input }) => userController.register( input ),
        login: (_, { input }) => userController.login( input ),

        //Parking
        registerParking: (_,{ input }, ctx) => parkingController.register( input , ctx ),

        //Booking
        addBooking: (_, { input }, ctx) => bookingController.addBooking( input , ctx ),
    },
};

module.exports = resolvers;