const {
  createStockService,
  getStockService,
} = require("../services/Stock.service");

//Creating a Stock
exports.createStock = async (req, res, next) => {
  try {
    const result = await createStockService(req.body);
    console.log(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfuly created the Stock",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: error.message,
    });
  }
};
// Gettig all Stocks
exports.getStock = async (req, res, next) => {
  try {
    const Stocks = await getStockService();
    res.status(200).json({
      status: "Success",
      data: Stocks,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couln't get the Stocks",
    });
  }
};
