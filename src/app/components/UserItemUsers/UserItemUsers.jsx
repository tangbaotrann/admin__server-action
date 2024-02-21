"use client";

import Link from "next/link";
import dayjs from "dayjs";

import styles from "@/app/ui/dashboard/users/Users.module.css";
import Button from "@/app/components/Button/Button";
import Image from "../Image/Image";
import Form from "../Form/Form";
import { deleteUser } from "@/app/utils/actions";
import Input from "../Input/Input";

function UserItemUsers({ user }) {
  const handleOnSubmitDelete = (formData) => {
    const isConfirm = confirm("Are you sure delete user?");

    isConfirm && deleteUser(formData);
  };

  return (
    <>
      <td>
        <div className={styles.info}>
          <Image
            src={user.image || "/noavatar.png"}
            alt="img-avt"
            className={styles.avatarImage}
          />
          {user.username}
        </div>
      </td>
      <td>{user.email}</td>
      <td>
        {dayjs(user.createdAt).format("DD/MM/YYYY") ||
          dayjs(new Date()).format("DD/MM/YYYY")}
      </td>
      <td>{user.role ? "Admin" : "Client"}</td>
      <td>{user.status ? "active" : "inactive"}</td>
      <td>
        <div className={styles.actions}>
          <Link href={`/dashboard/users/${user._id}`}>
            <Button className={styles.viewBtn}>View</Button>
          </Link>

          <Form action={handleOnSubmitDelete}>
            <Input type="hidden" name="_id" value={user._id} />
            <Button className={styles.deleteBtn}>Delete</Button>
          </Form>
        </div>
      </td>
    </>
  );
}

export default UserItemUsers;
