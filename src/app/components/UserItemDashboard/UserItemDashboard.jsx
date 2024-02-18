import styles from "@/app/ui/dashboard/transaction/Transaction.module.css";
import Image from "@/app/components/Image/Image";

function UserItem({ username, status }) {
  return (
    <>
      <td>
        <div className={styles.username}>
          <Image
            src="/noavatar.png"
            alt="user-image"
            className={styles.userImage}
          />
          {username}
        </div>
      </td>
      <td>
        <span
          className={`${styles.status} ${
            status === "Done"
              ? styles.done
              : status === "Pending"
              ? styles.pending
              : styles.cancelled
          }`}
        >
          {status}
        </span>
      </td>
      <td>14/02/2024</td>
      <td>$3.200</td>
    </>
  );
}

export default UserItem;
