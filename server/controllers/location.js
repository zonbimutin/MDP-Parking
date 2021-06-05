const Location = require("../models/location");
const Parking  = require("../models/parking");

async function createLocation (input, ctx) {
    const location = await Location();
    return location;
}

async function editLocation (id) {
    const location = await Location.findByIdAndUpdate(id).populate("idParking");
    return location;
}

async function deleteLocation (id) {
    const location = await Location.findByIdAndDelete(id).populate("idParking");
    return location;
}

async function getOneLocation (id) {
    const location = await Location.findOne(id).populate("idParking");
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