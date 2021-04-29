const Parking = require('../models/parking');

async function register( input, ctx ) {

    const newParking = input;

    //TODO: verify host
    if(!ctx.user.host) throw new Error("User is not a host");

    // Add host id from context
    newParking.host = ctx.user.host

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

module.exports = {
    register,
    getAll,
}