const express = require("express");
const connect = require("./config/db");
const PORT = 8000;
const app = express();
var cors = require("cors");
//Routes

const userRoutes = require("./routes/api/UserRoute");
const productRoutes = require("./routes/api/ProductRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

connect();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log("the server is started ✈"));
