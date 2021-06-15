const Parking           = require('../models/parking');
const Review            = require("../models/review");
const Host              = require("../models/host");
const Booking           = require("../models/booking");
const Location          = require("../models/location");
const ParkingFacilities = require("../models/parking_space_facilities");

<<<<<<< HEAD
    

    const newParking = input;

    //TODO: verify host
    if(!ctx.user.host) throw new Error("User is not a host");
=======
async function register(input, ctx) {
    const newParking = input;

    //TODO: verify host
    if(!ctx.user.host) throw new Error("L'utilisateur n'est pas considéré comme un hôte");
>>>>>>> server

    // Add host id from context
    newParking.user = ctx.user.id

    // format inputs 
    newParking.address = newParking.address.toLowerCase();

    // Keep parking in database
    try {
        const parking = new Parking(newParking);
        parking.save();
        return parking;
    } catch (error) {
        throw new Error("Erreur, le parking n'a pas pu être créé");
    }
}

async function editParking (id) {
    const parking = await Parking.findByIdAndUpdate(id).populate("idHost");
    return parking;
}

async function deleteParking (id) {
    const parking = await (await Parking.findByIdAndDelete(id).populate("idHost")).populated("idCustomer").populate("idReview");
    return parking;
}

async function getOneParking (id) {
    const parking = await Parking.findById(id).populate("idHost").populate("idCustomer");
    return parking;
}

async function getParkings () {
    const parkingFound = await Parking.find().populate("idHost").populate("idCustomer");
    return parkingFound;
}

async function getReviews () {
    const reviews = await Review.find().populate("idParking").populate("idCustomer");
    return reviews;
}

async function getBookings () {
    const bookings = await Booking.find().populate("idParking").populate("idCustomer");
    return bookings;
}

async function getHosts () {
    const hosts = await Host.find().populate("idParking");
    return hosts;
}

async function getLocations () {
    const locations = await Location.find().populate("idParking");
    return locations;
}

async function getParkingFacilities () {
    const parkingFacilities = await ParkingFacilities.find().populate("idParking");        
    return parkingFacilities;
}

async function searchParkings(search) {

    let typesIds = []
    
    const {dates, types} = search
    if(types) typesIds = types
    
    // Converting date to timestamp
    let timeStartDate = new Date(dates.from).getTime()
    let timeEndDate = new Date(dates.to).getTime()

    // verify valid dates
    if(!(timeStartDate && timeEndDate)) throw new Error('Dates are not valid');
    if(timeStartDate > timeEndDate) throw new Error('wrong date range');

    let parkingsList = []

    try {
        
        const parkings = await Parking.find().populate('user')
            .populate({
                path: 'bookings',
                match: {bookingStatus: {$in:['active']}}
            })
            .populate({
                path: 'parkingType',
                match: {_id: {$in: typesIds}}
            })
        

        parkings.forEach(function(parking){

            // fitering by parking type
            if(typesIds.length > 0 && !(parking.parkingType.length > 0)) return

            // filtering by booking
            if(parking.bookings.length > 0) {

                let founded = false

                parking.bookings.forEach(function(booking){
                    // f-from -----------f-to
                    //          s-from -------------- s-to
                    if(booking.endDate >= timeStartDate && booking.endDate <= timeEndDate) founded = true
                    
                    //             f-from -----------f-to
                    // s-from -------------- s-to
                    if(booking.startDate >= timeStartDate && booking.startDate <= timeEndDate) founded = true
                    
                    //         f-from ------ f-to
                    // s-from --------------------- s-to
                    if(booking.startDate >= timeStartDate && booking.endDate <= timeEndDate) founded = true
                })

                if(founded) return 

            }

            parkingsList.push(parking)

        })

        return parkingsList;

    } catch (error) {
        console.log(error.message)
    }


    
}

async function getParking(id){
    
    try {
        
        const parking = await Parking.findById(id).populate('user').populate('bookings').populate('parkingType');
        if(!parking) throw new Error('Parking not found')

        console.log(parking)
    
        return parking;

    } catch (error) {
        console.log(error.message)
    }


}



module.exports = {
    register,
<<<<<<< HEAD
    getAll,
    getParking,
    searchParkings
}
=======
    editParking,
    deleteParking,
    getOneParking,
    getParkings,
    getReviews,
    getBookings,
    getHosts,
    getLocations,
    getParkingFacilities,
};
>>>>>>> server
