const {
  getSuppliersService,
  createSupplierService,
} = require("../services/Supplier.service");

exports.getSupplier = async (req, res, next) => {
  try {
    const result = await getSuppliersService(req.body);
    res.send(200).json({
      status: "Success",
      message: "Supplier got successfully",
      data: result,
    });
  } catch (error) {
    res.send(400).json({
      status: "Failed",
      message: "Failed To get Supplier",
      error: error.message,
    });
  }
};

exports.createSupplier = async (req, res, next) => {
  try {
    const result = await createSupplierService(req.body);
    console.log(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfuly created the Supplier",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couln't create the Supplier",
    });
  }
};
