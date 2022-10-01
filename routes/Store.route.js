const express = require("express");
const { getStore, createStore } = require("../controllers/Store.controller");

const router = express.Router();

router.route("/").get(getStore).post(createStore);

module.exports = router;
