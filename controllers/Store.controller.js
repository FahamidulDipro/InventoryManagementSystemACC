const {
  createStoreService,
  getStoreService,
} = require("../services/Store.service");

//Creating a Store
exports.createStore = async (req, res, next) => {
  try {
    const result = await createStoreService(req.body);
    console.log(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfuly created the Store",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couln't create the Store",
    });
  }
};
// Gettig all Stores
exports.getStore = async (req, res, next) => {
  try {
    const Stores = await getStoreService();
    res.status(200).json({
      status: "Success",
      data: Stores,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couln't get the Stores",
    });
  }
};
