const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectID } = mongoose.Schema.Types;
const catagorychema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a catagory name"],
      lowercase: true,
      unique: true,
    },
    description: String,
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Please provide a valid URL"],
    },
  },
  {
    timestamps: true,
  }
);

exports.Catagory = mongoose.model("Catagory", catagorychema);
