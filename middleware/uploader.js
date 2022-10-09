const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, uniqueSuffix + "-" + file.originalname);
  },
});
const uploader = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    const supportediImg = /png|jpg/;
    const extenstion = path.extname(file.originalname);
    if (supportediImg.test(extenstion)) {
      callback(null, true);
    } else {
      callback(new Error("Must be a png or, jpg image"));
    }
  },
});

module.exports = uploader;
