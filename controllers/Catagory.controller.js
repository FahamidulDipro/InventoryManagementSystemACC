const {
  createCatagoryService,
  getCatagoryService,
} = require("../services/Catagory.service");

//Creating a catagory
exports.createCatagory = async (req, res, next) => {
  try {
    const result = await createCatagoryService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully created catagory",
      data: result,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "Failed", message: "Failed to create catagory" });
  }
};

// Getting all catagories
exports.getCatagory = async (req, res, next) => {
  try {
    const result = await getCatagoryService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully got catagory",
      data: result,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "Failed", message: "Failed to get catagory" });
  }
};
