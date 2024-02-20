import connectToDB from "./db";
import { User } from "./models";

const fetchUsers = async (qSearch) => {
  const regex = new RegExp(qSearch);

  try {
    await connectToDB();
    const users = await User.find({
      username: { $regex: regex },
    });

    return users;
  } catch (err) {
    console.log({ err });
    throw new Error("Error failed to fetch users!");
  }
};

// const fetchFindUser = async ({ id }) => {
//   try {
//     console.log("[userId] ->", id);
//     await connectToDB();
//     const user = await User.findById();

//     return user;
//   } catch (err) {
//     console.log({ err });
//     throw new Error("Error failed to fetch user!");
//   }
// };

export { fetchUsers };
