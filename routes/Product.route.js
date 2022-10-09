const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProducts,
  fileupload,
} = require("../controllers/Product.controller");
const uploader = require("../middleware/uploader");

router.post("/file-upload", uploader.single("image"), fileupload);
router.route("/").get(getProducts).post(createProducts);

module.exports = router;
