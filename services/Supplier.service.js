const { Supplier } = require("../models/Supplier");

exports.getSuppliersService = async () => {
  const supplier = await Supplier.find();
  return supplier;
};

exports.createSupplierService = async (data) => {
  const supplier = await Supplier.create(data);

  return supplier;
};
