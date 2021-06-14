const userController = require("./../controllers/user");
const hostController = require("./../controllers/host");
const parkingController = require("../controllers/parking");
const bookingController = require("../controllers/booking");
const parkingTypeController = require("../controllers/parkingType");


const resolvers = {
    Query: {
        // User
        getUser: () => userController.getUser(),
        getWishlist: (_,{}, ctx) => userController.getWishlist(ctx),

        //booking
        getUserBookings: (_,{}, ctx) => bookingController.getUserBookings(ctx),
        getBooking: (_,{id}, ctx) => bookingController.getBooking(id, ctx),


        // Parking
        getParkings: (_,{}) => parkingController.getAll(),
        getParking: (_, {id}) => parkingController.getParking(id),
        searchParkings: (_, {search}) => parkingController.searchParkings(search),

    },
    Mutation: {
        // User
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
    },
};

module.exports = resolvers;