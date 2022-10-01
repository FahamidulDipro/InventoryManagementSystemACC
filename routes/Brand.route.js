const express = require("express");
const router = express.Router();

const { createBrand, getBrand } = require("../controllers/Brand.controller");

router.route("/").post(createBrand).get(getBrand);
module.exports = router;
