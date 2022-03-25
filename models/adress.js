const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  name: { type: string, required: true },
  city: { type: string, required: true },
  state: { type: string, required: true },
  street: { type: string, required: true },
  contactNumber: { type: string, required: true },
  landmark: { type: string, required: true },
  zipCode: { type: string, required: true },
});
