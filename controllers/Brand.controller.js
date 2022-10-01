const {
  createBrandService,
  getBrandService,
} = require("../services/Brand.service");

//Creating a brand
exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);
    console.log(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfuly created the brand",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couln't create the brand",
    });
  }
};
// Gettig all brands
exports.getBrand = async (req, res, next) => {
  try {
    const brands = await getBrandService();
    res.status(200).json({
      status: "Success",
      data: brands,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: "Couln't get the brands",
    });
  }
};
