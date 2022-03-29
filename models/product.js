const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    manufacturer: { type: String, required: true },
    availableItems: { type: String, required: true },
    price: { type: String, required: true },
    imageURL: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const product = mongoose.model("product", ProductSchema);
module.exports = product;
