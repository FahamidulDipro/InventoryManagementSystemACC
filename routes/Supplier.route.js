const express = require("express");
const {
  createSupplier,
  getSupplier,
} = require("../controllers/Supplier.controller");
const router = express.Router();

router.route("/").get(getSupplier).post(createSupplier);
module.exports = router;
