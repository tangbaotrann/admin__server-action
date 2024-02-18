import styles from "@/app/ui/dashboard/dashboard.module.css";

import Card from "@/app/ui/dashboard/card/Card";
import Chart from "@/app/ui/dashboard/chart/Chart";
import Rightbar from "@/app/ui/dashboard/rightbar/Rightbar";
import Transaction from "@/app/ui/dashboard/transaction/Transaction";

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className={styles.content}>
          <Transaction />
          <Chart />
        </div>
      </div>

      <div className={styles.rightbar}>
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;
