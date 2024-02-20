import dayjs from "dayjs";

import styles from "@/app/ui/dashboard/transaction/Transaction.module.css";
import Image from "@/app/components/Image/Image";

function UserItem({ user }) {
  return (
    <>
      <td>
        <div className={styles.username}>
          <Image
            src={user.image || "/noavatar.png"}
            alt="user-image"
            className={styles.userImage}
          />
          {user.username}
        </div>
      </td>
      <td>
        <span
          className={`${styles.status} ${
            user.status === "Done"
              ? styles.done
              : user.status === "Pending"
              ? styles.pending
              : styles.cancelled
          }`}
        >
          {user.status}
        </span>
      </td>
      <td>
        {dayjs(user.createdAt).format("DD/MM/YYYY") ||
          dayjs(new Date()).format("DD/MM/YYYY")}
      </td>
      <td>{user.price}</td>
    </>
  );
}

export default UserItem;
