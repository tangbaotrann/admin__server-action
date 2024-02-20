import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    phone: {
      type: Number,
      require: true,
    },
    role: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const productsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    stock: {
      type: Number,
      require: true,
      min: 0,
    },
    color: {
      type: String,
      require: true,
    },
    size: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", usersSchema);

export const Product =
  mongoose.models.Product || mongoose.model("Product", productsSchema);
