import constants from "./constants";
import connectToDB from "./db";
import { Product, User } from "./models";

const fetchUsers = async (qSearch, pagination) => {
  const regex = new RegExp(qSearch);
  const ITEM_PER_PAGE = constants.PAGINATION_NUMBER;

  try {
    await connectToDB();

    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();

    const totalPages = Math.ceil(count / ITEM_PER_PAGE);

    const users = await User.find({
      username: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (pagination - 1));

    return { count, totalPages, users };
  } catch (err) {
    console.log({ err });
    throw new Error("Error failed to fetch users!");
  }
};

const fetchProducts = async (qSearch, pagination) => {
  const regex = new RegExp(qSearch);
  const ITEM_PER_PAGE = constants.PAGINATION_NUMBER;

  try {
    await connectToDB();

    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();

    const totalPages = Math.ceil(count / ITEM_PER_PAGE);

    const products = await Product.find({
      title: { $regex: regex },
    })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (pagination - 1));

    return { count, totalPages, products };
  } catch (err) {
    console.log({ err });
    throw new Error("Error failed to fetch products!");
  }
};

export { fetchUsers, fetchProducts };
