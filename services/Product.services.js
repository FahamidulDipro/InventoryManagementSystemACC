const { Brand } = require("../models/Brand");
const { Product } = require("../models/Product");

exports.getProductsService = async () => {
  const product = await Product.find();
  return product;
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  const { _id, brand } = product;
  const res = await Brand.updateOne(
    {
      _id: brand.id,
    },
    {
      $push: { products: _id },
    }
  );
  console.log(res.nModified);
  return product;
};
