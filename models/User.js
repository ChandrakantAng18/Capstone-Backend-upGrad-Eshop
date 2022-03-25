const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  isAdmin: { type: boolean, required: true },
  name: { type: string, required: true },
  email: { type: string, required: true },
  password: { type: string, required: true },
});
