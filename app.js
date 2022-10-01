const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const productRoute = require("./routes/Product.route");
const brandRoute = require("./routes/Brand.route");
const catagoryRoute = require("./routes/Catagory.route");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//Posting to database
app.use("/api/v1/product", productRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/catagory", catagoryRoute);

module.exports = app;
