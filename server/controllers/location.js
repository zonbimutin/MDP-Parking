const Location = require("../models/location");
const Parking  = require("../models/parking");

async function createLocation (input, ctx) {
    const location = await Location();
    return location;
}

async function editLocation (id) {
    const location = await Location;
    return location;
}

async function deleteLocation (id) {
    const location = await Location.deleteOne();
    return location;
}

async function getOneLocation (id) {
    const location = await Location.findOne();
    return location;
}

async function getLocations () {
    const location = await Location.find();
    return location;
}

async function getParkings () {
    const parkings = await Parking.find();
    return parkings;
}

module.exports = {
    createLocation,
    editLocation,
    deleteLocation,
    getOneLocation,
    getLocations,
    getParkings,
}