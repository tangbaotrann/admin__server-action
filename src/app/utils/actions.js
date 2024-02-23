"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

import connectToDB from "./db";
import { Product, User } from "./models";
import { signIn } from "../../auth";

// USER
const addUser = async (formData) => {
  const { username, email, password, phone, role, status, address } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      role,
      status,
      address,
    });

    await newUser.save();
  } catch (err) {
    console.log("[ERROR] ->", err);
    throw new Error("Error fetch add user failed!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

const deleteUser = async (formData) => {
  const { _id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await User.findByIdAndDelete(_id);
  } catch (err) {
    console.log("[ERROR] ->", err);
    throw new Error("Error fetch delete user failed!");
  }

  revalidatePath("/dashboard/users");
};

const findByIdUser = async (id) => {
  try {
    await connectToDB();
    const user = await User.findById(id);

    return user;
  } catch (err) {
    throw new Error("Error find by id failed!");
  }
};

const updateUser = async (formData) => {
  const { _id, username, email, password, phone, role, status, address } =
    Object.fromEntries(formData);
  try {
    await connectToDB();

    const newInfoUser = await findByIdUser(_id);

    newInfoUser.username = username;
    newInfoUser.email = email;
    newInfoUser.password = password;
    newInfoUser.phone = phone;
    newInfoUser.role = role;
    newInfoUser.status = status;
    newInfoUser.address = address;

    await newInfoUser.save();
  } catch (err) {
    throw new Error("Error update user failed!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Product
const addProduct = async (formData) => {
  const { title, category, price, stock, color, size, desc } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const newProduct = new Product({
      title,
      category,
      price,
      stock,
      color,
      size,
      desc,
    });

    await newProduct.save();
  } catch (err) {
    console.log("[ERROR] ->", err);
    throw new Error("Error fetch add product failed!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

const deleteProduct = async (formData) => {
  const { _id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await Product.findByIdAndDelete(_id);
  } catch (err) {
    throw new Error("Error fetch delete product failed!");
  }

  revalidatePath("/dashboard/products");
};

const findByIdProduct = async (id) => {
  try {
    await connectToDB();

    const product = await Product.findById(id);

    return product;
  } catch (err) {
    throw new Error("Error find by id product failed!");
  }
};

const updateProduct = async (formData) => {
  const { _id, title, category, price, stock, color, size, desc } =
    Object.fromEntries(formData);
  try {
    await connectToDB();

    const updateFields = {
      title,
      category,
      price,
      stock,
      color,
      size,
      desc,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(_id, updateFields);
  } catch (err) {
    throw new Error("Error update product failed!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// Login
const loginAuthenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", {
      username: username,
      password: password,
    });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};

export {
  // User
  addUser,
  deleteUser,
  findByIdUser,
  updateUser,
  // Product
  addProduct,
  deleteProduct,
  findByIdProduct,
  updateProduct,
  // Login authenticate
  loginAuthenticate,
};
