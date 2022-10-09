const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema.Types;
const validator = require("validator");

//Schema design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      unique: [true, "Name must be unique!"],
      lowercase: true,
      minLength: [3, "Name must be at least three characters"],
      maxLength: [100, "Too large name"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this product"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this product"],
      min: [0, "Price can't be negative"],
    },
    unit: {
      type: String,
      required: [true, "Please provide a unit for this product"],
      enum: {
        values: ["kg", "liter", "pcs", "bag"],
        message: "Unit value can't be {VALUE}, must be kg/liter/pcs/bag",
      },
    },
    imageURLs: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (!Array.isArray(value)) {
              return false;
            }
            let isValid = true;
            value.array.forEach((url) => {
              if (!validator.isURL(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: "Please provide valid URL",
        },
      },
    ],
    catagory: { type: String, required: true },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectID,
        ref: "Brand",
        required: true,
      },
    },
    quantity: {
      type: Number,
      required: [true, "Please provide a quantity for this product"],
      min: [0, "Quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
        message: "Quantity must be an integer",
      },
    },
    status: {
      type: String,
      enum: {
        values: ["In Stock", "Out Of Stock", "Dicontinued"],
        message: "Status can't be {VALUE}",
      },
    },
  },
  { timestamps: true }
);

exports.Product = mongoose.model("Product", productSchema);
