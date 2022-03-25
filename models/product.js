const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: string, required: true },
    category: { type: string, required: true },
    manufacturer: { type: string, required: true },
    availableItems: { type: string, required: true },
    price: { type: string, required: true },
    imageURL: { type: string, required: true },
    description: { type: string, required: true },
  },
  { timestamps: true }
);
