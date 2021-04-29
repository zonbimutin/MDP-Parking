const userController = require("./../controllers/user");
const hostController = require("./../controllers/host");
const parkingController = require("../controllers/parking");
const bookingController = require("../controllers/booking");


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

        //Host
        registerHost: (_,{ input }, ctx) => hostController.register( input , ctx ),

        //Parking
        registerParking: (_,{ input }, ctx) => parkingController.register( input , ctx ),

        //Booking
        addBooking: (_, { input }, ctx) => bookingController.addBooking( input , ctx ),
    },
};

module.exports = resolvers;