const express = require("express");
const { getStock, createStock } = require("../controllers/Stock.controller");

const router = express.Router();

router.route("/").get(getStock).post(createStock);

module.exports = router;
