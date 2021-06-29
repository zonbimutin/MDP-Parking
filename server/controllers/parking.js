const Parking = require('../models/parking');
const User = require('../models/user');

async function register( input, ctx ) {

    const newParking = input;
    console.log(ctx)
    //TODO: verify host
    if(!ctx.user.host || !ctx.user.id) throw new Error("Vous ne pouvez pas publier ce parking");

    // Add host id from context
    newParking.user = ctx.user.id

    // format inputs 
    newParking.address = newParking.address.toLowerCase()

    //activate new parking
    newParking.isActive = true

    // Guardar el parking en la DB
    try {
        const parking = new Parking(newParking);
        parking.save();
        console.log(parking)
        return parking;
    } catch (error) {
        throw new Error('Vous ne pouvez pas publier ce parking')
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
    if(!(timeStartDate && timeEndDate)) throw new Error('Les dates ne sont pas valides');
    if(timeStartDate > timeEndDate) throw new Error('Les dates ne sont pas valides');

    // verify before now date
    const today = new Date().getTime();
    if(timeStartDate < today) throw new Error('Les dates ne sont pas valides');
    
    let parkingsList = []

    try {

        let parkings
        
        if(typesIds.length > 0){

            parkings = await Parking.find().populate('user')
                .populate({
                    path: 'bookings',
                    match: {bookingStatus: {$in:['active']}}
                })
                .populate({
                    path: 'parkingType',
                    match: {_id: {$in: typesIds}}
                })
                
                
        } else {
            parkings = await Parking.find().populate('user')
                .populate({
                    path: 'bookings',
                    match: {bookingStatus: {$in:['active']}}
                })
                .populate('parkingType')
                
        }
        

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

        console.log(parkings)

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

async function getPakingsByHost(ctx){

    const {id} = ctx.user
    
    try {
        
        const parking = await Parking.find({user: id}).populate('bookings').populate('parkingType');
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
    searchParkings,
    getPakingsByHost
}