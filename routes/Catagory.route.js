const express = require("express");
const router = express.Router();
const {
  createCatagory,
  getCatagory,
} = require("../controllers/Catagory.controller");

router.route("/").get(getCatagory).post(createCatagory);
module.exports = router;
