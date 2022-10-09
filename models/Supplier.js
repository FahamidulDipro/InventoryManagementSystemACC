const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectID } = mongoose.Schema.Types;
const supplierchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a supplier name"],
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Please provide a valid email"],
      lowercase: true,
    },
    brand: {
      type: String,
      required: true,
      id: {
        type: ObjectID,
        ref: "Brand",
        required: true,
      },
    },
    suppliedBy: {
      name: {},
    },
    contactNumber: {
      type: String,
      required: [true, "Please provide a contact number"],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Please provide a valid mobile number",
      },
    },
    presentAddress: {
      type: String,
      required: [true, "Please provide your present address"],
    },
    permanentAddress: {
      type: String,
      required: [true, "Please provide your permanent address"],
    },
    tradeLicenseNumber: {
      type: Number,
      required: [true, "Please provide a trade license number"],
    },
    location: {
      type: Number,
      required: [true, "Please provide your location"],
    },
    nid: {
      type: String,
      required: [true, "Please provide your NID"],
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Please provide a valid URL"],
    },
  },
  {
    timestamps: true,
  }
);

exports.Supplier = mongoose.model("supplier", supplierchema);
