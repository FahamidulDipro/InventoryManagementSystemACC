const Product = require("../models/Product");

exports.getProductsService = async () => {
  const product = await Product.find();
  return product;
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};
