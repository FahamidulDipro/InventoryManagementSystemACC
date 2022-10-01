const mongoose = require("mongoose");

const { ObjectID } = mongoose.Schema.Types;
const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a store name"],

      unique: true,
      lowercase: true,
      enum: {
        values: [
          "dhaka",
          "chittagong",
          "rajshahi",
          "sylhet",
          "khulna",
          "barisal",
          "rangpur",
          "mymensingh",
        ],
        message: "{VALUE} is not valid",
      },
    },
    description: String,

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    // manager: {
    //   name: String,
    //   contactNumber: String,
    //   id: {
    //     type: ObjectID,
    //     ref: User,
    //   },
    // },
  },
  { timestamps: true }
);

exports.Store = mongoose.model("Store", storeSchema);
