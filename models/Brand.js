const mongoose = require("mongoose");
const validator = require("validator");

const { ObjectID } = mongoose.Schema.Types;
const brandSchema = mongoose.Schema(
  {
    products: [
      {
        type: ObjectID,
        ref: "Product",
      },
    ],
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a brand name"],
      maxLength: 100,
      unique: true,
      lowercase: true,
    },
    description: String,
    email: {
      type: String,
      validate: [validator.isEmail, "Please provide a valid email"],
      lowercase: true,
    },
    website: {
      type: String,
      validate: [validator.isURL, "Plese provide a valid URL"],
    },
    location: String,

    supplier: [
      {
        name: String,
        contactNumber: String,
        id: {
          type: ObjectID,
          ref: "Supplier",
        },
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

exports.Brand = mongoose.model("Brand", brandSchema);
