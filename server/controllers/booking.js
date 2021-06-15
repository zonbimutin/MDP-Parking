<<<<<<< HEAD
const Booking = require("../models/booking");
const Parking = require("../models/parking");

async function getUserBookings(ctx){

    try {

        const {id} = ctx.user
        const bookings = await Booking.find({userId: id}).populate('userId').populate('parkingId')
        if(!bookings) throw new Error('Parking not found')
    
        return bookings;

    } catch (error) {
        console.log(error);
        throw new Error(`La reservation n'existe pas`)
    }
}

async function addBooking( input , ctx ) {

    const {dates, parkingId } = input


    // Converting date to timestamp
    let timeStartDate = new Date(dates.from).getTime()
    let timeEndDate = new Date(dates.to).getTime()

    // verify valid dates
    if(!(timeStartDate && timeEndDate)) throw new Error('Dates are not valid');
    if(timeStartDate > timeEndDate) throw new Error('wrong date range');

    // verify Parking exist
    const foundParking = await Parking.findOne({ _id: parkingId });
    if(!foundParking) throw new Error('Parking not exist');
=======
const Booking  = require("../models/booking");
const Parking  = require("../models/parking");
const Rating   = require("../models/rating");
const Payment  = require("../models/payment");
const Customer = require("../models/customer");
const rating   = require("../models/rating");

async function createBooking (input, ctx)
{
    const { dates, parkingId } = input;

    // Converting date to timestamp
    let timeStartDate = new Date(dates.from).getTime();
    let timeEndDate = new Date(dates.to).getTime();

    // verify valid dates
    if(!(timeStartDate && timeEndDate)) throw new Error("Erreur, les dates ne sont pas valides");
    if(timeStartDate > timeEndDate) throw new Error("Erreur, Mauvaise plage de dates");

    // verify Parking exist
    const foundParking = await Parking.findOne({ _id: parkingId });
    if(!foundParking) throw new Error("Erreur, le parking n'existe pas");
>>>>>>> server

    // verify active bookings
    const acBookings = await Booking.find({parkingId: parkingId, bookingStatus: "active"});

    if(acBookings) {
        acBookings.forEach(function(booking){
<<<<<<< HEAD
            // f-from -----------f-to
            //          s-from -------------- s-to
            if(booking.endDate >= timeStartDate && booking.endDate <= timeEndDate) throw new Error('Conflict with booking dates');
            
            //             f-from -----------f-to
            // s-from -------------- s-to
            if(booking.startDate >= timeStartDate && booking.startDate <= timeEndDate) throw new Error('Conflict with booking dates');
            
            //         f-from ------ f-to
            // s-from --------------------- s-to
            if(booking.startDate >= timeStartDate && booking.endDate <= timeEndDate)throw new Error('Conflict with booking dates');
        })
=======
            if(booking.endDate >= timeStartDate && booking.endDate <= timeEndDate) 
                throw new Error("Erreur, il y a un conflit avec les dates de réservation");
            
            if(booking.startDate >= timeStartDate && booking.startDate <= timeEndDate) 
                throw new Error("Erreur, il y a un conflit avec les dates de réservation");
            
            if(booking.startDate >= timeStartDate && booking.endDate <= timeEndDate)
                throw new Error("Erreur, il y a un conflit avec les dates de réservation");
        });
>>>>>>> server
    }

    // Create booking
    try {
        const booking = new Booking({
<<<<<<< HEAD
          parkingId: input.parkingId,
          userId: ctx.user.id,
          startDate: timeStartDate,
          endDate: timeEndDate,
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

async function getBooking(id, ctx){
    
    try {

        if(!ctx.user.id) throw new Error(`La reservation n'existe pas `)
        
        const booking = await  Booking.findOne({_id: id, userId: ctx.user.id}).populate('parkingId')
        if(!booking) throw new Error(`La reservation n'existe pas `)

        return booking;

    } catch (error) {
        console.log(error.message)
    }
    
=======
            parkingId: input.parkingId,
            userId: ctx.user.id,
            startDate: input.startDate,
            endDate: input.endDate,
        });
        
        booking.save();
        foundParking.bookings.push(booking._id);
        foundParking.save();
        return booking;
      } catch (error) {
        console.log(error);
        throw new Error("Erreur, impossible de créer une réservation");
    }
}

async function getActiveBookings({from, to}) {
}

async function editBooking (id) {
    const booking = await Booking.findByIdAndUpdate({id}).populate("idCustomer");
    return booking;
}

async function deleteBooking (id) {
    const booking = await Booking.findByIdAndDelete({id}).populate("idCustomer");
    return booking;
}

async function getOneBooking (id) {
    const booking = await Booking.findById({id}).populate("idCustomer");
    return booking;
}

async function getBookings () {
    const booking = await Booking.find().populate("idBooking");
    return booking;
}

async function getCustomers () {
    const customers = await Customer.find().populate("idBooking");
    return customers;
}

async function getRatings () {
    const ratings = await Rating.find().populate("idBooking");
    return ratings;
}

async function getParkings () {
    const parkings = await Parking.find().populate("idBooking");
    return parkings;
}

async function getPayments () {
    const payments = await Payment.find().populate("idBooking");
    return payments;
>>>>>>> server
}

async function cancelBooking(id, ctx){
    
    try {

        if(!ctx.user.id) throw new Error(`La reservation n'existe pas `)
        
        const booking = await  Booking.findOne({_id: id, userId: ctx.user.id})

        if(!booking) throw new Error(`La reservation n'existe pas `)

        if(booking.bookingStatus == 'canceled') throw new Error('La reservation est déjà annulé')

        booking.bookingStatus = 'canceled'

        console.log(booking)

        booking.save()

        return booking;

    } catch (error) {
        console.log(error.message)
    }

}

module.exports = {
<<<<<<< HEAD
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
=======
    addBooking,
    getUserBookings,
    getBooking,
    cancelBooking
}
>>>>>>> client
