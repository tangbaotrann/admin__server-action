"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

import connectToDB from "./db";
import { Product, User } from "./models";

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
    throw new Error(err);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

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
    throw new Error(err);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export { addUser, addProduct };
