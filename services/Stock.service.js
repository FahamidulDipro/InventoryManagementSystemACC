const { Stock } = require("../models/Stock");

exports.createStockService = async (data) => {
  const result = await Stock.create(data);
  console.log(result);
  return result;
};

exports.getStockService = async () => {
  const result = await Stock.find();
  console.log(result);
  return result;
};
