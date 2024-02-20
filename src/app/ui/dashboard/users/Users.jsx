// "use client";

import Link from "next/link";

import styles from "./Users.module.css";
import Button from "@/app/components/Button/Button";
import Search from "@/app/components/Search/Search";
import UserItemUsers from "@/app/components/UserItemUsers/UserItemUsers";
import Pagination from "../pagination/Pagination";
import { fetchUsers } from "@/app/utils/data";

async function Users() {
  const users = await fetchUsers();
  console.log("[USERS] -->", users);
  return (
    <div className={styles.users}>
      <div className={styles.top}>
        <Search placeholder="Search for user..." />
        <Link href="/dashboard/users/add">
          <Button className={styles.btnAddNew}>Add new</Button>
        </Link>
      </div>

      {/* Table */}
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Role</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <UserItemUsers user={user} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}

export default Users;
