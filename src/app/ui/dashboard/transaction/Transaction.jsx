import styles from "./Transaction.module.css";
import UserItemDashboard from "@/app/components/UserItemDashboard/UserItemDashboard";

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
            <UserItemDashboard username="Jon" status="Done" />
          </tr>
          <tr>
            <UserItemDashboard username="Hanni" status="Pending" />
          </tr>
          <tr>
            <UserItemDashboard username="Jenie" status="Cancelled" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
