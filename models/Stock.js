const mongoose = require("mongoose");
const { ObjectID } = mongoose.Schema.Types;
const validator = require("validator");

//Schema design
const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectID,
      required: true,
      ref: "Product",
    },
    name: {
      type: String,
      required: [true, "Please provide a name for this Stock"],
      trim: true,
      unique: [true, "Name must be unique!"],
      lowercase: true,
      minLength: [3, "Name must be at least three characters"],
      maxLength: [100, "Too large name"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this Stock"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this Stock"],
      min: [0, "Price can't be negative"],
    },
    unit: {
      type: String,
      required: [true, "Please provide a unit for this Stock"],
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
      type: String,
      required: true,
      id: {
        type: ObjectID,
        ref: "Brand",
        required: true,
      },
    },
    quantity: {
      type: Number,
      required: [true, "Please provide a quantity for this Stock"],
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
    store: {
      name: {
        type: String,
        required: [true, "Please provide a name for this Stock"],
        trim: true,
        unique: [true, "Name must be unique!"],
        lowercase: true,
        minLength: [3, "Name must be at least three characters"],
        maxLength: [100, "Too large name"],
      },
      id: {
        type: ObjectID,
        require: true,
        ref: "Store",
      },
      suppliedBy: {
        name: {
          type: String,
          required: [true, "Please provide a supplier name"],
          trim: true,
        },
        id: {
          type: ObjectID,
          ref: "Supplier",
        },
      },
    },
  },
  { timestamps: true }
);

exports.Stock = mongoose.model("Stock", stockSchema);
