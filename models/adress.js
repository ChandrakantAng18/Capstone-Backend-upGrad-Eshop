const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  street: { type: String, required: true },
  contactNumber: { type: String, required: true },
  landmark: { type: String, required: true },
  zipCode: { type: String, required: true },
});

const address = mongoose.model("address", AddressSchema);
module.exports = address;
