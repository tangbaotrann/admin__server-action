import Users from "@/app/ui/dashboard/users/Users";
import styles from "@/app/ui/dashboard/users/Users.module.css";

function UsersPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  return (
    <div className={styles.usersPage}>
      <Users qSearch={q} pagination={page} />
    </div>
  );
}

export default UsersPage;
