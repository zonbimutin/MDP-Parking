const Booking  = require("../models/booking");
const Parking  = require("../models/parking");
const Rating   = require("../models/rating");
const Payment  = require("../models/payment");
const Customer = require("../models/customer");
const rating = require("../models/rating");

async function createBooking (input, ctx) {
    const { dates, parkingId } = input;

    // Converting date to timestamp
    let timeStartDate = new Date(dates.from).getTime();
    let timeEndDate = new Date(dates.to).getTime();

    // verify valid dates
    if(!(timeStartDate && timeEndDate)) throw new Error('Dates are not valid');
    if(timeStartDate > timeEndDate) throw new Error('wrong date range');

    // verify Parking exist
    const foundParking = await Parking.findOne({ _id: parkingId });
    if(!foundParking) throw new Error('Parking not exist');

    // verify active bookings
    const acBookings = await Booking.find({parkingId: parkingId, bookingStatus: "active"});

    if(acBookings) {
        acBookings.forEach(function(booking){
            if(booking.endDate >= timeStartDate && booking.endDate <= timeEndDate) 
                throw new Error('Conflict with booking dates');
            
            if(booking.startDate >= timeStartDate && booking.startDate <= timeEndDate) 
                throw new Error('Conflict with booking dates');
            
            if(booking.startDate >= timeStartDate && booking.endDate <= timeEndDate)
                throw new Error('Conflict with booking dates');
        })
    }

    // Create booking
    try {
        const booking = new Booking({
            parkingId: input.parkingId,
            userId: ctx.user.id,
            startDate: input.startDate,
            endDate: input.endDate,
        });
        
        booking.save();
        foundParking.bookings.push(booking._id)
        foundParking.save()
        return booking;

      } catch (error) {
        console.log(error);
        throw new Error('Cannot create reservation')
    }
}

async function editBooking (id) {

    const booking = await Booking.updateOne();
    return booking;
}

async function deleteBooking (id) {

    const booking = await Booking.deleteOne();
    return booking;
}

async function getOneBooking (id) {
    const booking = await Booking.findOne();
    return booking;
}

async function getBookings (){
    const booking = await Booking.find();
    return booking;
}

async function getCustomers () {
    const customers = await Customer.find();
    return customers;
}

async function getRatings () {

    const ratings = await Rating.find();
    return ratings;
}

async function getParkings () {
    const parkings = await Parking.find();
    return parkings;
}

async function getPayments () {
    const payments = await Payment.find();
    return payments;
}

module.exports = {
    createBooking,
    editBooking,
    deleteBooking,
    getOneBooking,
    getBookings,
    getCustomers,
    getRatings,
    getParkings,
    getPayments,
};