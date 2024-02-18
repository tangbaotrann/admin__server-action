import { MdSupervisedUserCircle } from "react-icons/md";

import styles from "@/app/ui/dashboard/card/Card.module.css";

function CardItem() {
  return (
    <>
      <MdSupervisedUserCircle size={24} />

      <div className={styles.detail}>
        <span className={styles.title}>Users</span>
        <span className={styles.number}>12.2</span>
        <span className={styles.positive}>
          <i className={styles.positiveNumber}>10%</i> more than a week.
        </span>
      </div>
    </>
  );
}

export default CardItem;
