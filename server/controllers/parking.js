const Parking = require('../models/parking');

async function register( input, ctx ) {

    

    const newParking = input;

    //TODO: verify host
    if(!ctx.user.host) throw new Error("User is not a host");

    // Add host id from context
    newParking.user = ctx.user.id

    // format inputs 
    newParking.address = newParking.address.toLowerCase();

    // Guardar el parking en la DB
    try {
        const parking = new Parking(newParking);
        parking.save();
        return parking;
    } catch (error) {
        throw new Error('No se pudo crear el parking')
    }
}

async function getAll(){
    
    const parkingFound = await Parking.find();
    console.log(parkingFound);
    return parkingFound;

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
    getAll,
    getParking,
    searchParkings
}