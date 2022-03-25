const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected");
    // const db = await mongoose.connection;
    // db.once("open", () => console.log("database is connected"));
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connect;
