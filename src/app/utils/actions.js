"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

import connectToDB from "./db";
import { Product, User } from "./models";

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
    const prod = await Product.findByIdAndDelete(_id);

    console.log("[PRODUCT DEL] ->", prod);
  } catch (err) {
    throw new Error("Error fetch delete product failed!");
  }

  revalidatePath("/dashboard/products");
};

export { addUser, deleteUser, addProduct, deleteProduct };
