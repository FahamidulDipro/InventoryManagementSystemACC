const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const productRoute = require("./routes/Product.route");
const brandRoute = require("./routes/Brand.route");
const catagoryRoute = require("./routes/Catagory.route");
const storeRoute = require("./routes/Store.route");
const supplierRoute = require("./routes/Supplier.route");
const stockRoute = require("./routes/Stock.route");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//Posting to database
app.use("/api/v1/product", productRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/catagory", catagoryRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/supplier", supplierRoute);
app.use("/api/v1/stock", stockRoute);

module.exports = app;
