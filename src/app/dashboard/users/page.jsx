import Users from "@/app/ui/dashboard/users/Users";
import styles from "@/app/ui/dashboard/users/Users.module.css";

function UsersPage() {
  return (
    <div className={styles.usersPage}>
      <Users />
    </div>
  );
}

export default UsersPage;
