import styles from "./transaction.module.css";
import UserItem from "@/app/components/UserItem/UserItem";

function Transaction() {
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
          <tr>
            <UserItem username="Jon" status="Done" />
          </tr>
          <tr>
            <UserItem username="Hanni" status="Pending" />
          </tr>
          <tr>
            <UserItem username="Jenie" status="Cancelled" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
