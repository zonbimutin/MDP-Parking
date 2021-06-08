const Booking = require("../models/booking");
const Parking = require("../models/parking");

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

async function getActiveBookings({from, to}){
    
}

module.exports = {
    addBooking,
}