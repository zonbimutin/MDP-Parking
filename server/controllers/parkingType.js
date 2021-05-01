const ParkingType = require("../models/parkingType");

function addParkingType(input) {
  try {
    const type = new ParkingType({
        label: input.label,
        img: input.img,
    });
    type.save();
    return type;
  } catch (error) {
    console.log(error);
  }
}

async function getAllParkingType(parkingId) {
  const result = await ParkingType.find()
  return result;
}

module.exports = {
    addParkingType,
    getAllParkingType,
};