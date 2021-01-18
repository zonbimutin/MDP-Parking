const Parking = require('../models/parking');

async function register( input, ctx ) {

    const newParking = input;

    // Add user id from context
    newParking.idUser = ctx.user.id

    // format inputs 
    newParking.streetName = newParking.streetName.toLowerCase();

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