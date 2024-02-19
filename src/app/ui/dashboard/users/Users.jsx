"use client";

import Link from "next/link";

import styles from "./Users.module.css";
import Button from "@/app/components/Button/Button";
import Search from "@/app/components/Search/Search";
import UserItemUsers from "@/app/components/UserItemUsers/UserItemUsers";
import Pagination from "../pagination/Pagination";

function Users() {
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
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <UserItemUsers />
            </tr>
            <tr>
              <UserItemUsers />
            </tr>
            <tr>
              <UserItemUsers />
            </tr>
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}

export default Users;
