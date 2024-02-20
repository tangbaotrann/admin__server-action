import Link from "next/link";
import dayjs from "dayjs";

import styles from "@/app/ui/dashboard/users/Users.module.css";
import Button from "@/app/components/Button/Button";
import Image from "../Image/Image";

function UserItemUsers({ user }) {
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
          <Button className={styles.deleteBtn}>Delete</Button>
        </div>
      </td>
    </>
  );
}

export default UserItemUsers;
