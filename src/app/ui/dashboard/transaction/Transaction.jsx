import styles from "./Transaction.module.css";
import { fetchUsers } from "@/app/utils/data";
import UserItemDashboard from "@/app/components/UserItemDashboard/UserItemDashboard";

async function Transaction() {
  const { users } = await fetchUsers();

  return (
    <div className={styles.transactions}>
      <h2 className={styles.title}>Latest Transactions</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <UserItemDashboard user={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
