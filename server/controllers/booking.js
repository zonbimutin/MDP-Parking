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

    // verify active bookings
    const acBookings = await Booking.find({parkingId: parkingId, bookingStatus: "active"});

    if(acBookings) {
        acBookings.forEach(function(booking){
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
    }

    // Create booking
    try {
        const booking = new Booking({
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
    addBooking,
    getUserBookings,
    getBooking,
    cancelBooking
}