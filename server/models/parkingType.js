const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkingTypeSchema = Schema({
    label: {
        type: String,
        require: true,
        unique: true
    },
    img: {
        type: String,
        require: true,
    },
    description: String
    
  });
  
  module.exports = mongoose.model("ParkingType", ParkingTypeSchema);