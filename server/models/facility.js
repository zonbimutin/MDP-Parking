const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const FacilitySchema = Schema({
   name: {
       type: String,
       require: true
   },

   parking: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Parking"
   }
});

module.exports = mongoose.model("Facility", FacilitySchema);