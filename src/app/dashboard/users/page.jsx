import Users from "@/app/ui/dashboard/users/Users";
import styles from "@/app/ui/dashboard/users/Users.module.css";

function UsersPage({ searchParams }) {
  const q = searchParams?.q || "";

  return (
    <div className={styles.usersPage}>
      <Users qSearch={q} />
    </div>
  );
}

export default UsersPage;
