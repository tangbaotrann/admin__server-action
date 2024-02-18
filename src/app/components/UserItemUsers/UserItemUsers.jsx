import styles from "@/app/ui/dashboard/users/Users.module.css";
import Button from "@/app/components/Button/Button";
import Image from "../Image/Image";

function UserItemUsers() {
  return (
    <>
      <td>
        <div className={styles.info}>
          <Image
            src="/noavatar.png"
            alt="img-avt"
            className={styles.avatarImage}
          />
          Hie
        </div>
      </td>
      <td>hie@gmail.com</td>
      <td>Oct 24 2001</td>
      <td>client</td>
      <td>passive</td>
      <td>
        <div className={styles.actions}>
          <Button className={styles.viewBtn}>View</Button>
          <Button className={styles.deleteBtn}>Delete</Button>
        </div>
      </td>
    </>
  );
}

export default UserItemUsers;
